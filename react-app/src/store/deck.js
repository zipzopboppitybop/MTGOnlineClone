const GET_DECKS = 'decks/ALL';
const GET_USER_DECKS = 'decks/USER';
const GET_DECK = 'decks/GET_DECK'

const actionGetDecks = (decks) => ({
    type: GET_DECKS ,
    decks
})

const actionGetDeck = (deck) => ({
    type: GET_DECK ,
    deck
})

const actionGetUserDecks = (decks) => ({
    type: GET_USER_DECKS,
    decks
})

export const thunkGetAllDecks = () => async (dispatch) => {
    const response = await fetch(`/api/decks/`)

    if (response.ok) {
        const decks = await response.json();
        dispatch(actionGetDecks(decks));
        return decks;
    } else {
        return response;
    }
}

export const thunkGetADeck = (id) => async (dispatch) => {
    const response = await fetch(`/api/decks/${id}`)

    if (response.ok) {
        const deck = await response.json();
        dispatch(actionGetDeck(deck));
        return deck;
    } else {
        return response;
    }
}

export const thunkGetUserDecks = (id) => async (dispatch) => {
    const response = await fetch(`/api/users/${id}/decks`)

    if (response.ok) {
        const decks = await response.json();
        dispatch(actionGetUserDecks(decks))
        return decks;
    } else {
        return response;
    }
}

const initialState = { deckList: null, userDeckList: null, currentDeck: null }

export default function deckReducer(state = initialState, action) {
    switch (action.type) {
        case GET_DECKS:
            return { ...state, deckList: action.decks };
         case GET_DECK:
                return { ...state, currentDeck: action.deck };
        case GET_USER_DECKS:
            return {...state, userDeckList: action.decks};
        default:
            return state;
    }
}