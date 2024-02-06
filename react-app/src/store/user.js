// constants
const GET_USERS = "users/GET_USERS";


const actionGetUsers = (users) => ({
	type: GET_USERS,
	users,
});

export const thunkGetAllUsers = () => async (dispatch) => {
	const response = await fetch("/api/users/");

	if (response.ok) {
		const data = await response.json();
		if (data.errors) {
			return;
		}

		dispatch(actionGetUsers(data));
	}
};

const initialState = { users: null };

export default function userReducer(state = initialState, action) {
	switch (action.type) {
		case GET_USERS:
			return { ...state, users: action.users};

		default:
			return state;
	}
}