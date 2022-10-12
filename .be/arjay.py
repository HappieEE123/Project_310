from typing import Union

from fastapi import FastAPI

app = FastAPI()


@app.get("/getComments")
def getComments():
    return {}
