import cv2
import tensorflow as tf #forget
import numpy as np
from PIL import Image
import io

crop_model = cv2.CascadeClassifier('haarcascade_frontalface_alt.xml')
model = tf.keras.models.load_model('COSC310.unziped.mod')


def getScore(request_object_content):
    img = np.array(Image.open(io.BytesIO(request_object_content)).convert('L'))
    face  = crop_model.detectMultiScale(img)
    if len(face)==0:
        return -1
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
    return ans[0]