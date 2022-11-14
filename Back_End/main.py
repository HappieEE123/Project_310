from typing import Union
import time
from fastapi import FastAPI, File, UploadFile, Depends, Form, Response, Cookie
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles

import models
from db import engine, SessionLocal
models.Base.metadata.create_all(bind=engine)
import crud, models, schemas
from sqlalchemy.orm import Session
from sqlalchemy import desc
import ML

from pydantic import BaseModel
class Login(BaseModel):
    username : str
    password : str 

class Signup(BaseModel):
    username : str
    password : str
    phone_email : str



app = FastAPI()



import random
from html import escape
replacements = {
    "fuck","f**k",
    "shit","s**t",
    "dick","d**k",
    "' and 1=1","Chill",
    "happieeee","happieee",
}
def anitizor(str):
    return str

app.mount("/imgs", StaticFiles(directory="imgs"), name="imgs")

# Dependency https://fastapi.tiangolo.com/tutorial/sql-databases/#__tabbed_2_3
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


origins = [
    "*",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/heartBeat")
def heartbeat():
    return "OK"

@app.post("/getHappiness")
async def create_file(file: UploadFile):
    request_object_content = await file.read()
    return {"score":int(ML.getScore(request_object_content))}


@app.post("/post/")
async def post(file: UploadFile, db: Session = Depends(get_db), description: str = Form()):
    user_id = 1
    request_object_content = await file.read()
    res = ML.getScore(request_object_content)

    db_post = models.Post(user_id = 1, date = time.time(), description=anitizor(description), happiness=[int(res*100) if res!=-1 else random.randint(10,100)], commentCounts=0, likesCount=0)
    db.add(db_post)
    db.commit()
    db.refresh(db_post)
    with open("./imgs/%s" % db_post.id, "wb") as f:
        f.write(request_object_content)
    return {"score":db_post.happiness/100}#["happiness"]}

key = "uweDW^TDT#DH#FJ" # FOR DEMO ONLY! MUST BE DIFFERENT FOR PRODUCTION!
secret  = "UIHWE&^X^&*$&#YHIOEJFIOEUF&*RYUH" # FOR DEMO ONLY! MUST BE DIFFERENT FOR PRODUCTION!

def issue(exp_time, username):
    JWT = {"username": username, "exp_time": exp_time}
    msg=username+"=="+str(exp_time)+secret
    # https://stackoverflow.com/questions/7585435/best-way-to-convert-string-to-bytes-in-python-3
    signature = hmac.new(key.encode('utf-8'), msg = msg.encode('utf-8'), digestmod=hashlib.sha256).hexdigest()
    JWT["signature"] = signature
    return json.dumps(JWT)


@app.get("/feed")
def getFeed(db: Session = Depends(get_db)):
    return (db.query(models.Post).order_by(models.Post.id.desc()).all())


import hmac
import hashlib
import base64
import json
import time

import bcrypt 
@app.post("/login/")
async def LogIn(login: Login, response: Response):
    try:
        with Session(engine) as session:
            u = session.query(models.User).filter(models.User.username == login.username)
            if bcrypt.checkpw(login.password.encode("utf-8"),list(u)[0].passwordSalt):
                response.set_cookie(key="token", value=issue(3600*24+time.time(), login.username))
                return {"message": "Come to the dark side, we have cookies"} 
            else:
                return -1
    except IndexError as e:
        return "No User"

    
@app.post("/signup/")
async def create_signup(signup: Signup, response: Response):  
        with Session(engine) as session:
            u = session.query(models.User).filter(models.User.username == signup.username)
            if len(list(u)) != 0:
                return -1
            salt = bcrypt.gensalt()
            hash = bcrypt.hashpw(signup.password.encode('utf-8'), salt)
            db_user = models.User(username = signup.username, passwordSalt=hash , phone_email = signup.phone_email)
            session.add(db_user)
            session.commit()
            return "OK"
    

def getUserName(JWT: str): #validate vs verify vs check
    """
    Check if the JWT is valid and if yes return the username. 
    If the JWT is expired, exception ExpiredJWT will be raised.
    If the JWT is forged, exception ForgedJWT will be raised
    """
    JWT = json.loads(JWT)
    if time.time()>JWT["exp_time"]:
        raise ExpiredJWT
    msg=JWT["username"]+"=="+str(JWT["exp_time"])+secret
    signature = hmac.new(key.encode('utf-8'), msg = msg.encode('utf-8'), digestmod=hashlib.sha256).hexdigest()
    if signature != JWT["signature"]:
        raise ForgedJWT
    return JWT["username"]


@app.get("/checkLogin")
def checkLogin(token: str | None = Cookie(default=None)):
    print(token)
    return getUserName(token)