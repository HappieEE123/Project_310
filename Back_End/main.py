from typing import Union
import time
from fastapi import FastAPI, File, UploadFile, Depends, Form
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles

import models
from db import engine, SessionLocal
models.Base.metadata.create_all(bind=engine)
import crud, models, schemas
from sqlalchemy.orm import Session
from sqlalchemy import desc
import ML

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



@app.get("/feed")
def getFeed( db: Session = Depends(get_db)):
    return (db.query(models.Post).order_by(models.Post.id.desc()).all())
