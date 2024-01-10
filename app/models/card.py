from .db import db, environment, SCHEMA, add_prefix_for_prod
import datetime

class Card(db.Model):
    __tablename__ = 'cards'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False)
    manaCost = db.Column(db.String(50), nullable=False)
    manaValue = db.Column(db.Integer)
    types = db.Column(db.String(50), nullable=False)
    cardText = db.Column(db.String(50), nullable=True)
    flavorText = db.Column(db.String(50), nullable=True)
    power = db.Column(db.Integer)
    toughness = db.Column(db.Integer)
    expansion = db.Column(db.String(255), nullable=True)
    rarity = db.Column(db.String(255))
    releaseSet = db.Column(db.String(255))
    allSets = db.Column(db.String(400))
    artist = db.Column(db.String(255))
    thumbnail = db.Column(db.String(255))
    color= db.Column(db.String(50), nullable=False)
    activateOnPlay = db.Column(db.Boolean, nullable=False)

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'manaCost': self.manaCost,
            'manaValue': self.manaValue,
            'types': self.types,
            'cardText': self.cardText,
            'flavorText': self.flavorText,
            'power': self.power,
            'toughness': self.toughness,
            'expansion': self.expansion,
            'rarity': self.rarity,
            'releaseSet': self.releaseSet,
            'allSets': self.allSets,
            'artist': self.artist,
            'thumbnail': self.thumbnail,
            'color': self.color
        }