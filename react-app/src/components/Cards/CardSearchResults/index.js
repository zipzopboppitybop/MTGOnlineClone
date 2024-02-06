import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';



const CardSearchResults = () => {
    // const dispatch = useDispatch()
    // const decks = useSelector(state => state.decks.deckList);
    // const location = useLocation()
    // const query = new URLSearchParams(location.search).get('query').toLowerCase();
    // const filteredDecks = [];
    // useEffect(() => {
    //     dispatch(thunkGetAllDecks())
    // }, [dispatch,])

    // if (decks) {
    //     for (let deck of decks) {
    //         let element = deck.name.toLowerCase();
    //         if (element.includes(query)) filteredDecks.push(deck)
    //     }
    // }

    return (
        <>
        <h1>hello</h1>
            {/* {decks ? (
                <>
                    <h1 className='search-header'>Search Decks</h1>
                    <DeckSearchBar query={query} />
                    <h2 id='feed-headline'>Results: {filteredDecks.length}</h2>
                </>
            ) : (
                <>
                    <h1 className='search-header'>Search Decks</h1>
                    <DeckSearchBar />
                    <h2 id='feed-headline'>Results: 0</h2>
                </>
            )}


            {filteredDecks.length > 0 ? (
                <div className='feed'>
                <ul className='decks-list'>
                    {filteredDecks?.sort((a, b) => new Date(b?.createdAt) - new Date(a?.createdAt))?.map(deck =>
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
            )} */}
        </>
    )
}

export default CardSearchResults;