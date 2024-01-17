import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { thunkGetUserDecks } from '../../../store/deck';
import { useParams } from "react-router-dom";
import Loading from '../../LoadingScreen';
import DeckItem from '../DeckItem';
import "./UsersDecks.css"


const UserDecks = () => {
    const dispatch = useDispatch()
    const { id } = useParams();
    useEffect(() => {
        dispatch(thunkGetUserDecks(id))
    }, [dispatch,])
    const decks = useSelector(state => state.decks.deckList);

    return (
        <>
        <h4 id='feed-headline'>Hello</h4>
        {/* {decks ? (
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
            <Loading />
        )} */}
        </>
    )
}

export default UserDecks;