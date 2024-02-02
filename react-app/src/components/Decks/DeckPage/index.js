import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { thunkGetAllDecks } from '../../../store/deck';
import Loading from '../../LoadingScreen';
import DeckItem from '../DeckItem';
import "./DeckPage.css"


const DeckPage = () => {
    const dispatch = useDispatch()
    const decks = useSelector(state => state.decks.deckList);
    useEffect(() => {
        dispatch(thunkGetAllDecks())
    }, [dispatch,])

    return (
        <h1>Hello</h1>
        // <>
        // <h4 id='feed-headline'>Recent Decks</h4>
        // {decks ? (
        //     <div className='feed'>
        //     <ul className='decks-list'>
        //         {Object?.values(decks)?.sort((a, b) => new Date(b?.createdAt) - new Date(a?.createdAt))?.map(deck =>
        //         (
        //             <li key={deck?.id} className="deck-item">
        //                 <DeckItem deck={deck} />
        //             </li>
        //         )
        //         )
        //         }
        //     </ul>
        // </div>
        // ) : (
        //     <Loading />
        // )}
        // </>
    )
}

export default DeckPage;