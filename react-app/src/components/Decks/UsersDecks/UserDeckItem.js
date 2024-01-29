import React from 'react';
import DeckItem from '../DeckItem';
import "./UsersDecks.css"

const UserDeckItem = ({decks, viewUser}) => {

    return (
        <>
        {decks?.length ? (
            <div className='feed'>
                <ul className='decks-list'>
                    {Object?.values(decks)?.sort((a, b) => new Date(b?.createdAt) - new Date(a?.createdAt))?.map(deck =>
                    (
                        <li key={deck?.id} className="deck-item">
                            <DeckItem deck={deck} />
                        </li>
                    )
                    )
                    }
            </ul>
            </div>
        ) : (
            <div className='feed'>
            <h1 id='feed-headline'>{viewUser.username} Has No Decks</h1>
            </div>
        )}
        </>
    )
}

export default UserDeckItem;