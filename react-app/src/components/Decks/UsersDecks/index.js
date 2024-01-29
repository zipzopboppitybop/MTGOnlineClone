import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { thunkGetUserDecks } from '../../../store/deck';
import { thunkViewUser } from '../../../store/session';
import { useParams } from "react-router-dom";
import "./UsersDecks.css"
import MissingUser from '../../Missing/MissingUser';
import UserDeckItem from './UserDeckItem';

const UserDecks = () => {
    const dispatch = useDispatch()
    const { id } = useParams();
    useEffect(() => {
        dispatch(thunkGetUserDecks(id))
        dispatch(thunkViewUser(id))
    }, [dispatch, id])
    const decks = useSelector(state => state.decks.userDeckList);
    const viewUser = useSelector(state => state.session.viewUser);

    return (
        <>
        {viewUser ? (
            <>
            <h1 id='feed-headline'>{viewUser.username}'s Decks</h1>
            <h4 id='feed-headline'>Total Results: {viewUser.decks.length}</h4>
            <div>
                <UserDeckItem decks={decks} viewUser={viewUser} />
            </div>
            </>

        ) : (
            <div>
                <MissingUser />
            </div>
        )}
        </>
    )
}

export default UserDecks;