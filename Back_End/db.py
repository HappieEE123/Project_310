from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
import os

with open("/home/wg25r/PSDSQL","r") as f: 
    SQLPWD = f.read()
 
SQLALCHEMY_DATABASE_URL = "mysql+pymysql://wg25r:"+SQLPWD+"@localhost/COSC310"

engine = create_engine(SQLALCHEMY_DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()