const GET_CARDS = 'cards/ALL';
const GET_CARDS_NAME = 'cards/name';
const GET_CARDS_ID = 'cards/id';

const actionGetAllCards = (cards) => ({
    type: GET_CARDS  ,
    cards
})

const actionGetCardsByName = (cards) => ({
    type: GET_CARDS_NAME  ,
    cards
})

const actionGetCardsById = (card) => ({
    type: GET_CARDS_ID ,
    card
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

export const thunkGetCardsByName = (name,page) => async (dispatch) => {
    const response = await fetch(`/api/cards/${name}/${page}`)

    if (response.ok) {
        const cards = await response.json();
        dispatch(actionGetCardsByName(cards));
        return cards;
    } else {
        return response;
    }
}

export const thunkGetCardsById= (id) => async (dispatch) => {
    const response = await fetch(`/api/cards/card/${id}`)

    if (response.ok) {
        const card = await response.json();
        dispatch(actionGetCardsById(card));
        return card;
    } else {
        return response;
    }
}

const initialState = { cardList: null, missingCards: null}

export default function cardReducer(state = initialState, action) {
    switch (action.type) {
        case GET_CARDS:
            return { ...state, cardList: action.cards };
        case GET_CARDS_NAME:
            return { ...state, cardList: action.cards };
        case GET_CARDS_ID:
            return { ...state, missingCards: action.cards };
        default:
            return state;
    }
}