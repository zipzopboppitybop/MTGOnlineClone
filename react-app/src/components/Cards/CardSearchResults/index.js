import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import { thunkGetCardsByName } from '../../../store/card';
import CardSearchBar from '../../SearchBar/CardSearchBar';
import MissingCard from '../../Missing/MissingCard';



const CardSearchResults = () => {
    const dispatch = useDispatch()
    const cards = useSelector(state => state.cards.cardList);
    const location = useLocation()
    const query = new URLSearchParams(location.search).get('query').toLowerCase();
    useEffect(() => {
        dispatch(thunkGetCardsByName(query))
    }, [dispatch,])

    return (
        <>
            {cards ? (
                <>
                    <h1 className='search-header'>Search Cards</h1>
                    <CardSearchBar query={query} />
                    <h2 id='feed-headline'>Results: {cards?.length}</h2>
                </>
            ) : (
                <>
                    <h1 className='search-header'>Search Cards</h1>
                    <CardSearchBar />
                    <h2 id='feed-headline'>Results: 0</h2>
                </>
            )}


            {cards ? (
                <div className='feed'>
                <ul className='decks-list'>
                    {cards?.map(card =>
                    (
                        <li key={card?.id}>
                            <img src={card.image_url} alt={card.name} />
                        </li>
                    )
                    )
                    }
                </ul>
                </div>
            ) : (
            <MissingCard />
            )}
        </>
    )
}

export default CardSearchResults;