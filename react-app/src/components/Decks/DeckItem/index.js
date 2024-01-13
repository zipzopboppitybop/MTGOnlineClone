import React from "react";
import { useSelector, useDispatch } from "react-redux"
import { NavLink } from "react-router-dom";

const DeckItem = ({ deck}) => {
    const dispatch = useDispatch();
    const currentUser = useSelector(state => state?.session?.user)

    return (
        <div>
            {deck.name}
        </div>
    )
}

export default DeckItem