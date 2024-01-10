from flask import Blueprint, request
from flask_login import login_required, current_user
from app.models import Deck, db
from .auth_routes import validation_errors_to_error_messages
# from app.forms import 
from datetime import date

deck_routes = Blueprint('decks', __name__)


@deck_routes.route('/')
def decks():
    """
    Query for all decks made and returns them is a list of dictionaries
    """
    decks = [deck.to_dict() for deck in Deck.query.all()]
    return decks