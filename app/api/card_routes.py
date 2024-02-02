from flask import Blueprint, request
from flask_login import login_required, current_user
from app.models import db, User
from .auth_routes import validation_errors_to_error_messages
from datetime import date
from mtgsdk import Card, Set

card_routes = Blueprint('cards', __name__)


@card_routes.route('/')
def cards():
    """
    Query for all cards and returns them is a list of dictionaries
    """
    cards = [card.name for card in Card.where(page=5).where(pageSize=100).all()]
    return cards


@card_routes.route('/<name>')
def card(name):
    """
    Query for a card by name and return it in a dictionary
    """
    cards = [{"cardName": card.name, "cardId": card.id} for card in Card.where(name=name).all()]
    if cards is None:
        return { 'errors': ['Cards not found!'] }, 404

    return cards

