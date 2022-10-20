from sqlalchemy.orm import Session

import models, schemas


def get_post(db: Session, post_id: int):
    return db.query(models.Post).filter(models.Post.id == user_id).first()


def create_post(db: Session, post: schemas.CreatPost):
    db_post = models.Post(user_id = 1, description=post.description)
    db.add(db_post)
    db.commit()
    db.refresh(db_post)
    return db_post
