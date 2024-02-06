import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import UserItem from './UserItem';
import { thunkGetAllUsers } from '../../store/user';
import UserSearchBar from '../SearchBar/UserSearchBar';
import MissingUser from '../Missing/MissingUser';


const UserSearchResults = () => {
    const dispatch = useDispatch()
    const users = useSelector(state => state.users.userList);
    const location = useLocation()
    const query = new URLSearchParams(location.search).get('query').toLowerCase();
    const filteredUsers = [];
    useEffect(() => {
        dispatch(thunkGetAllUsers())
    }, [dispatch,])

    if (users) {
        for (let user of users) {
            let element = user.username.toLowerCase();
            if (element.includes(query)) filteredUsers.push(user)
        }
    }

    return (
        <>
            {users ? (
                <>
                    <h1 className='search-header'>Search Users</h1>
                    <UserSearchBar query={query} />
                    <h2 id='feed-headline'>Results: {filteredUsers.length}</h2>
                </>
            ) : (
                <>
                    <h1 className='search-header'>Search Users</h1>
                    <UserSearchBar />
                    <h2 id='feed-headline'>Results: 0</h2>
                </>
            )}


            {filteredUsers.length > 0 ? (
                <div className='feed'>
                <ul className='decks-list'>
                    {filteredUsers?.sort((a, b) => new Date(b?.createdAt) - new Date(a?.createdAt))?.map(user =>
                    (
                        <li key={user?.id} className="user-item">
                            <UserItem user={user} />
                        </li>
                    )
                    )
                    }
                </ul>
                </div>
            ) : (
            <MissingUser />
            )}
        </>
    )
}

export default UserSearchResults;