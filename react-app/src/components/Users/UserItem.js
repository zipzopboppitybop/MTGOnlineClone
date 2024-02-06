import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";


const UserItem = ({user}) => {

    return (
        <>
            <NavLink to={`/users/${user.id}`}>
                <div className="user-item-stuff">
                    {user.profile_pic ? (
                    <   img className="user-item-profile-pic" src={user.profile_pic} alt="Couldn't Load!"/>
                    ) : (
                    <    i  className="fas fa-user-circle profile-icon user-item-profile-pic " />
                    )}
                    <p>{user.username}</p>  
                    <ul className="user-item-stats stat">
                        <li>
                            {user.decks.length}
                        </li>
                        <li>
                            0
                        </li>
                    </ul>
                    <ul className="user-item-stats stats-name">
                        <li>
                            Decks
                        </li>
                        <li>
                            Followers
                        </li>
                    </ul>
                </div>
            </NavLink>
        </>


    )
}

export default UserItem