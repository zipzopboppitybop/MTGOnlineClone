import React from "react";
import { useSelector, useDispatch } from "react-redux"
// import { NavLink } from "react-router-dom";
import thumbnail from "../../../images/deckbox.png"


const DeckItem = ({deck}) => {
    const dispatch = useDispatch();
    console.log(deck)

    return (
        <div>
            {deck.thumbnail ? (
                <div className="image-container">
                    <img src={thumbnail} className="thumbnail" alt="Failed To Load Image" />
                </div>
                
            ) : (
                <div className="image-container">
                    <img src={thumbnail} className="thumbnail" alt="Failed To Load Image" />
                </div>
                
            )}
            
            {deck.name}
        </div>
    )
}

export default DeckItem