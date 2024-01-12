import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { thunkGetAllDecks } from '../../../store/deck';
import Loading from '../../LoadingScreen';
import "./Feed.css"


const Feed = () => {
    const dispatch = useDispatch()
    const decks = useSelector(state => state.decks.deckList);
    const sessionUser = useSelector(state => state.session.user);
    useEffect(() => {
        dispatch(thunkGetAllDecks())
    }, [dispatch,])

    // console.log(decks)

    return (
        <>
        {decks ? (
            <div className='feed'>
            <ul className='deck-list'>
                {Object?.values(decks)?.sort((a, b) => new Date(b?.createdAt) - new Date(a?.createdAt))?.map(deck =>
                (
                    <li key={deck?.id} className="deck-item">
                        hello
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

export default Feed;