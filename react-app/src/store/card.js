const GET_CARDS = 'cards/ALL';

const actionGetAllCards = (cards) => ({
    type: GET_CARDS  ,
    cards
})


export const thunkGetAllCecks = () => async (dispatch) => {
    const response = await fetch(`/api/cards/`)

    if (response.ok) {
        const cards = await response.json();
        dispatch(actionGetAllCards(cards));
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
        default:
            return state;
    }
}