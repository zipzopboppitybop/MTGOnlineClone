# from flask import Blueprint, request
# from flask_login import login_required, current_user
# from app.models import Deck, db,
# from .auth_routes import validation_errors_to_error_messages
# # from app.forms import 
# from datetime import date

# deck_routes = Blueprint('decks', __name__)


# deck_routes.route('/<id>')
# @login_required
# def decks():
#     """
#     Query for all decks made by current user and returns them is a list of dictionaries
#     """
#     decks = Question.query.all()
#     return_list = []
#     for question in questions:
#         question_dict = question.to_dict()
#         return_list.append(question_dict)
#     return return_list