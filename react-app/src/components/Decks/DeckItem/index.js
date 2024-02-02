import React from "react";
// import { useSelector, useDispatch } from "react-redux"
// import { NavLink } from "react-router-dom";
import thumbnail from "../../../images/deckbox.png"
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";


const DeckItem = ({deck}) => {

    return (
        <NavLink to={`/decks/${deck.id}`}>
            <div>
                {deck.thumbnail ? (
                    <div className="image-container">
                        <img src={thumbnail} className="thumbnail" alt="Failed To Load" />
                    </div>
                
                ) : (
                    <div className="image-container">
                        <img src={thumbnail} className="thumbnail" alt="Failed To Load" />
                    </div>
                )} 
                <p className="deck-name">{deck.name}</p>
                <NavLink className="deck-owner-name" to={`/users/${deck.owner.id}`}>
                    {deck.owner.profile_pic ? (
                        <img src={deck.owner.profile_pic} alt="Couldn't Load!"/>
                        ) : (
                        <i  className="fas fa-user-circle profile-icon " />
                    )}
                &nbsp;
                <span >{deck.owner.username}</span>
                </NavLink>
            </div>
        </NavLink>
    )
}

export default DeckItem