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
                    <img alt='Cannot Load' className='user-page-profile-pic' ></img>
                    
                ) : (
                    <i className="fas fa-user-circle user-page-profile-pic"  style={{fontSize: 6 + "rem"}}/>
                )}
                
                <h4 className='user-name'>{viewUser.username}</h4>
                <hr></hr>
                <p className='user-stuff'>Decks; {viewUser.decks.length}</p>
            </div>
            
            {viewUser.bio ? (
                            <div className='user-bio'>
                            <p className='bio'>{viewUser.bio}</p>
                        </div>
            ) : (
                <div className='user-bio'>
                <p className='no-bio'>This User does not have a bio!</p>
            </div>
            )}

        </div>
        )}  
        </>
    )
}

export default UserPage;