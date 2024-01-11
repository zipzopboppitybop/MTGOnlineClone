from .db import db, environment, SCHEMA, add_prefix_for_prod

deck_list = db.Table(
    'deck_list',
    db.Model.metadata,
    db.Column('deckId', db.Integer, db.ForeignKey(add_prefix_for_prod('decks.id'))),
    db.Column('cardId', db.Integer, db.ForeignKey(add_prefix_for_prod('cards.id'))),
    db.Column('amount', db.Integer)
)

if environment == 'production':
    deck_list.schema = SCHEMA