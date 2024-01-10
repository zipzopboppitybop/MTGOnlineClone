"""empty message

Revision ID: 0c3526d0dbd0
Revises: 013309ca16b9
Create Date: 2024-01-10 10:49:30.143845

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '0c3526d0dbd0'
down_revision = '013309ca16b9'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('cards',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=50), nullable=False),
    sa.Column('manaCost', sa.String(length=50), nullable=False),
    sa.Column('manaValue', sa.Integer(), nullable=True),
    sa.Column('types', sa.String(length=50), nullable=False),
    sa.Column('cardText', sa.String(length=50), nullable=True),
    sa.Column('flavorText', sa.String(length=50), nullable=True),
    sa.Column('power', sa.Integer(), nullable=True),
    sa.Column('toughness', sa.Integer(), nullable=True),
    sa.Column('expansion', sa.String(length=255), nullable=True),
    sa.Column('rarity', sa.String(length=255), nullable=True),
    sa.Column('releaseSet', sa.String(length=255), nullable=True),
    sa.Column('allSets', sa.String(length=400), nullable=True),
    sa.Column('artist', sa.String(length=255), nullable=True),
    sa.Column('thumbnail', sa.String(length=255), nullable=True),
    sa.Column('color', sa.String(length=50), nullable=False),
    sa.Column('activateOnPlay', sa.Boolean(), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('cards')
    # ### end Alembic commands ###