from app.models import db, environment, SCHEMA
from sqlalchemy.sql import text
from app.models.deck_list import deck_list

def seed_deck_lists():
    connection = db.engine.connect()

    data = [
        {"deckId":1, "cardId":1, "amount":1},
        {"deckId":2, "cardId":2, "amount":4}
    ]

    for card in data:
        connection.execute(deck_list.insert(), card)
    
    connection.close()

def undo_deck_lists():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.deck_list RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM deck_list"))
        
    db.session.commit()