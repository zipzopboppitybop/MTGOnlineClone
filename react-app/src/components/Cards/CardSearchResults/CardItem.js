import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";


const CardItem = ({card}) => {

    return (
        <>
            <NavLink to={`/cards/${card.id}`}>
                <img src={card.image_url} alt={card.name} />
            </NavLink>
        </>


    )
}

export default CardItem