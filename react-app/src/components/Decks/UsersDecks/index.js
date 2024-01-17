import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { thunkGetUserDecks } from '../../../store/deck';
import { thunkViewUser } from '../../../store/session';
import { useParams } from "react-router-dom";
import "./UsersDecks.css"
import MissingUser from '../../Missing';
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
            <div>
                <UserDeckItem decks={decks} viewUser={viewUser} />
            </div>
        ) : (
            <div>
                <MissingUser />
            </div>
        )}
        </>
    )
}

export default UserDecks;