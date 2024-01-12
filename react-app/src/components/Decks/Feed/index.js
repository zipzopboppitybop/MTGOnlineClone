import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { thunkGetAllDecks } from '../../../store/deck';
import "./Feed.css"


const Feed = () => {
    const dispatch = useDispatch()
    const decks = useSelector(state => state.decks);
    const sessionUser = useSelector(state => state.session.user);
    useEffect(() => {
        dispatch(thunkGetAllDecks())
    }, [dispatch,])

    console.log(decks);

    return (
        <div className='feed'>
        <ul className='question-list'>
            <li>hello</li>
        </ul>
    </div>
    )
}

export default Feed;