# from app.models import db, Card, environment, SCHEMA
# from sqlalchemy.sql import text


# def seed_cards():
#     card1 = Card(
#         name='Animate Wall', manaCost='White', manaValue=1, types='Enchantment-Aura', cardText='Target Wall can now attack. Target wall\'s power and toughness are unchanged, even if its power is 0.', power=0, toughness=0, expansion='Unlimited Edition', rarity="Rare Nonfoil", releaseSet='Limited Edition Alpha', allSets='Limited Edition Alpha, Limited Edition Beta, Unlimited Edition', artist="Dan Frazier", thumbnail="Hello", color="White", activateOnPlay=True)
#     card2 = Card(
#         name='Air Elemental', manaCost='Colorless, Colorless, Colorless, Blue, Blue', manaValue=5, types='Creature-Elemental', cardText='Flying', flavorText='These spirits of the air are winsome and wild and cannot be truly contained. Only marginally intelligent, they often substitute whimsy for strategy, delighting in mischief and mayhem.', power=4, toughness=4, expansion='Unlimited Edition', rarity="Uncommon Nonfoil", releaseSet='Limited Edition Alpha', allSets='Limited Edition Alpha, Limited Edition Beta, Unlimited Edition', artist="Richard Thomas", thumbnail="Hello", color="Blue",activateOnPlay=False)

#     db.session.add(card1)
#     db.session.add(card2)
#     db.session.commit()

# def undo_cards():
#     if environment == "production":
#         db.session.execute(f"TRUNCATE table {SCHEMA}.cards RESTART IDENTITY CASCADE;")
#     else:
#         db.session.execute(text("DELETE FROM cards"))
        
#     db.session.commit()