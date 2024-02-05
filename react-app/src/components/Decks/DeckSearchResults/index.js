import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { thunkGetAllDecks } from '../../../store/deck';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import Loading from '../../LoadingScreen';
import DeckItem from '../DeckItem';
import "./DeckSearch.css"
import MainSearchBar from '../../SearchBar/MainSearchBar';
import MissingDeck from '../../Missing/MissingDeck';


const DeckSearchResults = () => {
    const dispatch = useDispatch()
    const decks = useSelector(state => state.decks.deckList);
    const location = useLocation()
    const query = new URLSearchParams(location.search).get('query')
    useEffect(() => {
        dispatch(thunkGetAllDecks())
    }, [dispatch,])

    console.log(decks)

    return (
        <>
            {decks ? (
                <>
                    <h1 className='search-header'>Search Decks</h1>
                    <MainSearchBar />
                    <h4 id='feed-headline'>Results: {decks.length}</h4>
                </>
            ) : (
                <>
                    <h1 className='search-header'>Search Decks</h1>
                    <MainSearchBar />
                    <h4 id='feed-headline'>Results: 0</h4>
                </>
            )}


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

export default DeckSearchResults;