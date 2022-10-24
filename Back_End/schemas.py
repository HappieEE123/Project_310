# from pydantic import BaseModel

# class PostBase(BaseModel):
#     description: str


class Post(PostBase):
     user_id: int
     id: int
     happiness: int
     likesCount: int
     commentCounts: int


class CreatPost(PostBase):
     pass
