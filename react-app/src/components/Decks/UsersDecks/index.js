import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { thunkGetUserDecks } from '../../../store/deck';
import { useParams } from "react-router-dom";
import Loading from '../../LoadingScreen';
import DeckItem from '../DeckItem';
import "./UsersDecks.css"
import MissingUser from '../../Missing';


const UserDecks = () => {
    const dispatch = useDispatch()
    const { id } = useParams();
    useEffect(() => {
        dispatch(thunkGetUserDecks(id))
    }, [dispatch, id])
    const decks = useSelector(state => state.decks.userDeckList);
    console.log(decks[0]?.owner)

    if (!decks[0]?.owner) {
        return <MissingUser />
    }

    return (
        <>
        
        {decks ? (
            <div className='feed'>
            <h1 id='feed-headline'>{decks[0]?.owner.username}'s Decks</h1>
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
            <Loading />
        )}
        </>
    )
}

export default UserDecks;