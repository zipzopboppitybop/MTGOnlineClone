import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from "react-router-dom";
import { thunkGetUserDecks } from '../../store/deck';
import { thunkViewUser } from '../../store/session';
import MissingUser from '../Missing/MissingUser';
import "./UserPage.css";


const UserPage = () => {
    const dispatch = useDispatch()
    const { id } = useParams();
    useEffect(() => {
        dispatch(thunkGetUserDecks(id))
        dispatch(thunkViewUser(id))
    }, [dispatch, id])
    const viewUser = useSelector(state => state.session.viewUser);


    return (
        <>
        {!viewUser ? (
            <MissingUser />
        ) : (
            <div className='user-page-div'>
            <div className='user-info'>
                {viewUser.profile_pic ? (
                    <img className='user-page-profile-pic' ></img>
                    
                ) : (
                    <i className="fas fa-user-circle user-page-profile-pic"  style={{fontSize: 6 + "rem"}}/>
                )}
                
                <h4 className='user-name'>{viewUser.username}</h4>
                <hr></hr>
                <p className='user-stuff'>Decks; {viewUser.decks.length}</p>
            </div>
            
            <div className='user-bio'>
                <p>Hello</p>
            </div>
        </div>
        )}  
        </>
    )
}

export default UserPage;