// Constants
export const ADD_TILE = 'ADD_TILE';

// Action creators
export const addTile = (tile) => ({
	type: ADD_TILE,
	tile
});

// Reducers
let initialState = [
	{
		text: 'Ayo'
	},
	{
		text: 'Technology'
	}
]
export const reducer = (state=initialState, action) => {
	switch (action.type) {
		case ADD_TILE:
			return state.concat([action.tile]);
		default:
			return state;
	}
}

export default reducer;