import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import { thunkGetCardsByName } from '../../../store/card';
import CardSearchBar from '../../SearchBar/CardSearchBar';
import MissingCard from '../../Missing/MissingCard';
import CardItem from './CardItem';



const CardSearchResults = () => {
    const dispatch = useDispatch()
    const cards = useSelector(state => state.cards.cardList);
    const filteredCards = cards?.filter((v,i,a)=>a.findIndex(v2=>['name', 'multiverseId'].every(k=>v2[k] ===v[k]))===i)
    const location = useLocation()
    const query = new URLSearchParams(location.search).get('query').toLowerCase().split("/");
    useEffect(() => {
        dispatch(thunkGetCardsByName(query[0], 1))
    }, [dispatch])

    if (filteredCards) {
        for (let card of filteredCards) {
            console.log(card.image_url)
        }
    }

    

    return (
        <>
            {cards ? (
                <>
                    <h1 className='search-header'>Search Cards</h1>
                    <CardSearchBar query={query} />
                    <h2 id='feed-headline'>Results: {filteredCards?.length}</h2>
                </>
            ) : (
                <>
                    <h1 className='search-header'>Search Cards</h1>
                    <CardSearchBar />
                    <h2 id='feed-headline'>Results: 0</h2>
                </>
            )}


            {filteredCards ? (
                <div className='feed'>
                <ul className='decks-list'>
                    {filteredCards?.map(card =>
                    (
                        <li key={card?.id}>
                            <CardItem card={card} />
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