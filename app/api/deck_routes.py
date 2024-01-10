from flask import Blueprint, request
from flask_login import login_required, current_user
from app.models import Deck, db, User
from .auth_routes import validation_errors_to_error_messages
from app.forms import DeckForm
from datetime import date

deck_routes = Blueprint('decks', __name__)


@deck_routes.route('/')
def decks():
    """
    Query for all decks made and returns them is a list of dictionaries
    """
    decks = [deck.to_dict() for deck in Deck.query.all()]
    return decks


@deck_routes.route('/<int:id>')
def deck(id):
    """
    Query for a deck by id and return it in a dictionary
    """
    deck = Deck.query.get(id)
    if deck is None:
        return { 'errors': ['Deck not found!'] }, 404

    return deck.to_dict()


@deck_routes.route("/create", methods=["POST"])
@login_required
def create_new_deck():
    """
    Create a new deck
    """
    user = current_user.to_dict()
    form = DeckForm()
    
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():

        # image = form.data["art"]
        # image.filename = get_unique_filename(image.filename)
        # upload = upload_file_to_s3(image)
        # # print(upload)

        # if "url" not in upload:
        # # if the dictionary doesn't have a url key
        # # it means that there was an error when you tried to upload
        # # so you send back that error message (and you printed it above)
        #     return { 'errors': 'URL not in upload' }

        # url = upload["url"]

        if form.data['cardAmount'] is None:
            form.data['cardAmount'] = 0

        new_deck = Deck(
            name=form.data['name'],
            userId=user['id'],
            cardAmount=form.data['cardAmount'],
            thumbnail=form.data['thumbnail']
        )
        db.session.add(new_deck)
        db.session.commit()
        # new_image = Post(image= url)
        # db.session.add(new_image)
        # db.session.commit()
        return new_deck.to_dict()

    if form.errors:
        print(form.errors)
        return { 'errors': form.errors }
    

@deck_routes.route("/<int:id>", methods=["PUT"])
@login_required
def edit_a_deck(id):
    """
     Query for editing an existing deck the current user has created
    """
    user = current_user.to_dict()
    form = DeckForm()
            
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        deck = Deck.query.get(id)
        if deck is None:
            return { 'errors': ['Deck not found!'] }, 404
    
        deck_dict = deck.to_dict()

        if deck_dict["userId"] != user["id"]:
            return { 'errors': ['Unathorized!'] }, 401
        
        if form.data['cardAmount']  is None:
            deck.cardAmount=0
        else:
            deck.cardAmount=form.data['cardAmount']
        
        deck.name=form.data['name']
        deck.thumbnail=form.data['thumbnail']
        deck.updatedAt=date.today()
        db.session.commit()
        return deck.to_dict()
        

    if form.errors:
        print(form.errors)
        return { 'errors': form.errors }
    

@deck_routes.route('/delete/<id>', methods=['DELETE'])
@login_required
def delete_a_deck(id):
    """
    Query for a deck user has created and delete it
    """
    user = current_user.to_dict()
    deck = Deck.query.get(id)

    if deck is None:
        return { 'errors': ['Deck not found!'] }, 404

    deck_dict = deck.to_dict()

    if deck_dict["userId"] != user["id"]:
        return { 'errors': ['Unathorized!'] }, 401

    db.session.delete(deck)
    db.session.commit()
    return {"Message": "Deck Deleted Successfully"}