from .db import db, environment, SCHEMA, add_prefix_for_prod
import datetime

class Deck(db.Model):
    __tablename__ = 'decks'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(40), nullable=False, unique=True)
    userId = db.Column(db.Integer, db.ForeignKey(
        add_prefix_for_prod('users.id')), nullable=False)
    cardAmount = db.Column(db.Integer)
    thumbnail = db.Column(db.String(255))
    createdAt = db.Column(db.DateTime, default=db.func.now())
    updatedAt = db.Column(db.DateTime, default=db.func.now())

    owner = db.relationship('User', back_populates='decks')

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'cardAmount': self.cardAmount,
            'thumbnail': self.thumbnail,
            'createdAt': self.createdAt,
            'updatedAt': self.updatedAt 
        }
