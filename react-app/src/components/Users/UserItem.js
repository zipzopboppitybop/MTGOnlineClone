import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";


const UserItem = ({user}) => {

    return (
        <>
            <NavLink to={`/users/${user.id}`}>
                <div>
                    <p>{user.username}</p>    
                </div>
            </NavLink>
        </>


    )
}

export default UserItem