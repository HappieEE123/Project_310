from typing import Union

from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
import tensorflow as tf #forget
import numpy as np
from PIL import Image
import io
app = FastAPI()

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

@app.post("/getHappiness")
async def create_file(file: UploadFile):
    #https://github.com/tiangolo/fastapi/discussions/4308
    request_object_content = await file.read()
    img = Image.open(io.BytesIO(request_object_content)).resize((48,48)).convert('L')
    array = np.array(img).reshape(1,48,48,1)
    ans = model.predict(array)[0]
    print(ans)
    return {"score":float(ans[0])}
