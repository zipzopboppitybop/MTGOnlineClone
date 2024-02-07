import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from "react-router-dom";
import { thunkGetADeck } from '../../../store/deck';
import MissingDeck from '../../Missing/MissingDeck';
import "./DeckPage.css"


const DeckBuilder = () => {
    // const dispatch = useDispatch()
    // const { id } = useParams();
    // const deck = useSelector(state => state.decks.currentDeck);
    // useEffect(() => {
    //     dispatch(thunkGetADeck(id))
    // }, [dispatch, id])

    return (
        <>
        {deck ? (
            <div>
                <h1>Hello</h1>
            </div>
        ) : (
            <MissingDeck />
        )}
        </>
    )
}

export default DeckBuilder;