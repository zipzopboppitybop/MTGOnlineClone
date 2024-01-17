import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { thunkGetUserDecks } from '../../../store/deck';
import { thunkViewUser } from '../../../store/session';
import { useParams } from "react-router-dom";
import Loading from '../../LoadingScreen';
import DeckItem from '../DeckItem';
import "./UsersDecks.css"

const UserDeckItem = ({decks, viewUser}) => {

    return (
        <>
        {decks?.length ? (
            <div className='feed'>
                <h1 id='feed-headline'>{viewUser.username}'s Decks</h1>
                <h4 id='feed-headline'>Total Results: {decks.length}</h4>
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
        )}
        </>
    )
}

export default UserDeckItem;