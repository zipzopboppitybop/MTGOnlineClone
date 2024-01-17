const GET_DECKS = 'decks/ALL';
const GET_USER_DECKS = 'decks/USER';

const actionGetDecks = (decks) => ({
    type: GET_DECKS ,
    decks
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

const initialState = { deckList: null }

export default function deckReducer(state = initialState, action) {
    switch (action.type) {
        case GET_DECKS:
            return { ...state, deckList: action.decks };
        case GET_USER_DECKS:
            return {...state, deckList: action.decks};
        default:
            return state;
    }
}