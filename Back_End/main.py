from typing import Union
import time
from fastapi import FastAPI, File, UploadFile, Depends, Form, Response, Cookie
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles

import models
from db import engine, SessionLocal
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
class snedSMS(BaseModel):
    number: str
    qID: int

class Likes(BaseModel):
    postid: int

print("a")
models.Base.metadata.create_all(bind=engine)

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


import random
from html import escape

def anitizor(str):
    return str





app.mount("/imgs", StaticFiles(directory="imgs"), name="imgs")
app.mount("/questions", StaticFiles(directory="questions"), name="questions")

# Dependency https://fastapi.tiangolo.com/tutorial/sql-databases/#__tabbed_2_3
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

 



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

    db_post = models.Post(user_id = 1, date = time.time(), description=description, happiness=[int(res*100) if res!=-1 else random.randint(10,100)],
     commentCounts=0, likesCount=0)
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
    return (db.query(models.Post).order_by(models.Post.id.desc())).all()


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
def checkLogin(token = Cookie(default=None)):
    print(token)
    return getUserName(token)


@app.post("/likes")
def likes(l: Likes, db:Session=Depends(get_db)):
    old = db.query(models.Post).filter(models.Post.id == l.postid)
    print(old[0].likesCount+1)
    old.update({"likesCount":old[0].likesCount+1})
    db.commit()
    return "LOL You liked this. OK, great. See you later."




@app.get("/check")
def checkQuestion(qID, ans):
    if qID == "1" and ans == "D":
        return True
    elif qID=="2" and ans == "A":
        return Tru 
    return False

import vonage 
client = vonage.Client(key="0e66cd09", secret="xMgepqTzTe221dvz")
sms = vonage.Sms(client)




@app.post("/sendSMS")
def send(smsO: snedSMS):
    responseData = sms.send_message(
        {
            "from": "12404508545",
            "to": smsO.number,
            "text": f"https://api.weasoft.com/questions/{smsO.qID}\nThe answer is {[0,'D','A'][smsO.qID]}",
        }
    )

    if responseData["messages"][0]["status"] == "0":
        return "Message sent successfully."
    else:
        return f"Message failed with error: {responseData['messages'][0]['error-text']}"
