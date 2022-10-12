from typing import Union
from fastapi import FastAPI
app = FastAPI()

@app.get("/testWayne")
def wayne():
    return "I am Wayne"