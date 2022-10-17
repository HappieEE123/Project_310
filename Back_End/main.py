from typing import Union

from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
import tensorflow as tf #forget
import numpy as np
from PIL import Image
import io
app = FastAPI()
import cv2
import random
crop_model = cv2.CascadeClassifier('haarcascade_frontalface_alt.xml')
model = tf.keras.models.load_model('COSC310.unziped.mod')

origins = [
    "*",#Because gitpod fowarding this has to be *
    "http://localhost.tiangolo.com",
    "https://localhost.tiangolo.com",
    "http://localhost",
    "http://localhost:8080",
    "http://coder.weasoft.com:1010",
    "https://happieee.weasoft.com",
    "https://8100-happieee123-project310-udhq8dxnduq.ws-us70.gitpod.io/"
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
    #https://github.com/tiangolo/fastapi/discussions/4308
    #https://tinkalshakya283125.medium.com/face-detection-from-live-video-crop-the-face-and-send-it-via-email-using-opencv-and-smtplib-b2c32c182651
    request_object_content = await file.read()
    img = Image.open(io.BytesIO(request_object_content)).convert('L')
    degs = {1: 0, 3: 180, 5: 90, 7:270}
    deg = degs[img.getexif()[274]]
    img = img.rotate(deg)
    img = np.array(img)
    cv2.imwrite("/home/wg25r/tmp_raw_"+str(random.random())+".png",img)
    face  = crop_model.detectMultiScale(img)
    if len(face)==0:
        return {"score":-1,"message": "Cannot find face(s)"}
    else:
        face = face[0]
    x1 = face[0]
    y1 = face[1]
    x2 = face[2] + x1
    y2 = face[3] + y1 
    crop_img = img[y1:y2 , x1:x2]     
    # resized_img = pylab.imshow(cv2.resize(crop_img,(48,48)))
    resized_img = cv2.resize(crop_img,(48,48))
    array = np.array(resized_img).reshape(1,48,48,1)
    ans = model.predict(array)[0]
    cv2.imwrite("/home/wg25r/tmp_"+str(random.random())+".png", resized_img)
    # cv2.imsave(resized_img, "tmp.png")
    return {"score":float(ans[0])}
