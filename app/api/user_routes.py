from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import User

user_routes = Blueprint('users', __name__)


@user_routes.route('/')
@login_required
def users():
    """
    Query for all users and returns them in a list of user dictionaries
    """
    users = User.query.all()
    return {'users': [user.to_dict() for user in users]}


@user_routes.route('/<int:id>')
def user(id):
    """
    Query for a user by id and returns that user in a dictionary
    """
    user = User.query.get(id)
    return user.to_dict()

@user_routes.route('/<int:id>/decks')
def userDecks(id):
    """
    Query for a user by id and returns decks created by that user in a list of deck dictionaries
    """
    user = User.query.get(id)
    usersDecks = [deck.to_dict() for deck in user.decks]
    return usersDecks