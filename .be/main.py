from typing import Union

from fastapi import FastAPI

app = FastAPI()

import wayne
import arjay
import khalid


@app.get("/getMyFeed")
def getMyFeed():
    return {"[ {postID, user, UNIXtime, useravator(url), image(url), Happiness, liesCount, Comments count, description} ]"}

