from app.models import db, Deck, environment, SCHEMA
from sqlalchemy.sql import text


def seed_decks():
    deck1 = Deck(
        name='Goblins', userId=1, cardAmount=60)
    deck2 = Deck(
        name='Knights', userId=1, cardAmount=60,thumbnail="hello")
    deck3 = Deck(
        name='Lightning', userId=2, cardAmount=60)
    deck4 = Deck(
        name='Lol', userId=2, cardAmount=60,thumbnail="hello")


    db.session.add(deck1)
    db.session.add(deck2)
    db.session.add(deck3)
    db.session.add(deck4)
    db.session.commit()

def undo_decks():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.decks RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM decks"))
        
    db.session.commit()