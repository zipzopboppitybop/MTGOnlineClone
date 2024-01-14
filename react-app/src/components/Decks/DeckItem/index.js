import React from "react";
// import { useSelector, useDispatch } from "react-redux"
// import { NavLink } from "react-router-dom";
import thumbnail from "../../../images/deckbox.png"


const DeckItem = ({deck}) => {

    return (
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
            
            {deck.owner.username}
            {deck.name}
            
        </div>
    )
}

export default DeckItem