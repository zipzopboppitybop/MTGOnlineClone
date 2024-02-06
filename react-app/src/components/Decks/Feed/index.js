import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { thunkGetAllDecks } from '../../../store/deck';
import DeckItem from '../DeckItem';
import "./Feed.css"
import MainSearchBar from '../../SearchBar/MainSearchBar';
import MissingDeck from '../../Missing/MissingDeck';


const Feed = () => {
    const dispatch = useDispatch()
    const decks = useSelector(state => state.decks.deckList);
    useEffect(() => {
        dispatch(thunkGetAllDecks())
    }, [dispatch,])

    return (
        <>
            <MainSearchBar />
            <h2 id='feed-headline'>Recent Decks</h2>

            {decks ? (
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
            <MissingDeck />
            )}
        </>
    )
}

export default Feed;