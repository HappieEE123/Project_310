from typing import Union

from fastapi import FastAPI, File, UploadFile
import tensorflow as tf #forget
import numpy as np
from PIL import Image
import io
app = FastAPI()

model = tf.keras.models.load_model('COSC310.unziped.mod')

@app.post("/getHappiness")
async def create_file(file: UploadFile):
    #https://github.com/tiangolo/fastapi/discussions/4308
    request_object_content = await file.read()
    img = Image.open(io.BytesIO(request_object_content)).resize((48,48)).convert('L')
    array = np.array(img).reshape(1,48,48,1)
    ans = model.predict(array)[0]
    print(ans)
    return {"score":float(ans[0])}
