from flask_wtf import FlaskForm
from wtforms import StringField, TextAreaField, IntegerField
from wtforms.validators import DataRequired, Email, ValidationError, Length

class DeckForm(FlaskForm):
    name = StringField('name', validators=[DataRequired(), Length(min=1, max=40, message='Deck name must be between 1 to 40 characters')])
    userId = IntegerField('owner')
    cardAmount = IntegerField('cardAmount')
    thumbnail = StringField('thumbnail')
