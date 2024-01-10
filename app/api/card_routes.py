from flask import Blueprint, request
from flask_login import login_required, current_user
from app.models import Card, db, User
from .auth_routes import validation_errors_to_error_messages
from datetime import date

card_routes = Blueprint('cards', __name__)


@card_routes.route('/')
def cards():
    """
    Query for all cards and returns them is a list of dictionaries
    """
    cards = [card.to_dict() for card in Card.query.all()]
    return cards


@card_routes.route('/<int:id>')
def card(id):
    """
    Query for a card by id and return it in a dictionary
    """
    card = Card.query.get(id)
    if card is None:
        return { 'errors': ['Card not found!'] }, 404

    return card.to_dict()

