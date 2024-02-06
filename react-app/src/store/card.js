const GET_CARDS = 'cards/ALL';
const GET_CARDS_NAME = 'cards/name'

const actionGetAllCards = (cards) => ({
    type: GET_CARDS  ,
    cards
})

const actionGetCardsByName = (cards) => ({
    type: GET_CARDS_NAME  ,
    cards
})


export const thunkGetAllCards = () => async (dispatch) => {
    const response = await fetch(`/api/cards/`)

    if (response.ok) {
        const cards = await response.json();
        dispatch(actionGetAllCards(cards));
        return cards;
    } else {
        return response;
    }
}

export const thunkGetCardsByName = (name) => async (dispatch) => {
    const response = await fetch(`/api/cards/${name}`)

    if (response.ok) {
        const cards = await response.json();
        dispatch(actionGetCardsByName(cards));
        return cards;
    } else {
        return response;
    }
}

const initialState = { cardList: null }

export default function cardReducer(state = initialState, action) {
    switch (action.type) {
        case GET_CARDS:
            return { ...state, cardList: action.cards };
        case GET_CARDS_NAME:
            return { ...state, cardList: action.cards };
        default:
            return state;
    }
}