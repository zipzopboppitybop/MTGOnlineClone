import React from 'react';
import DeckItem from '../Decks/DeckItem';
import "../Decks/UsersDecks/UsersDecks.css"

const UsersPageDeckItem = ({decks, viewUser}) => {
    let userDecks = "";

    if (decks) userDecks = decks.slice(0,4);
    else userDecks = "";

    return (
        <>
        {decks?.length ? (
            <div className='feed'>
                <ul className='user-page-decks-list'>
                    {Object?.values(userDecks)?.sort((a, b) => new Date(b?.createdAt) - new Date(a?.createdAt))?.map(deck =>
                    (
                        <li key={deck?.id} className="user-page-deck-item">
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

export default UsersPageDeckItem;