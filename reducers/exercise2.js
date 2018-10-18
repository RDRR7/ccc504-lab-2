// TODO: Implement me
// I work with /actions/index.js -> boxTicked
import actionTypes from '../actions/actionTypes';

const initialState = {
	hasTickedBox: false,
};

const tickBox = (state, action) => {
	return Object.assign({}, state, {
		hasTickedBox: action.payload.hasTickedBox,
	});
};

const exercise = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.BOX_TICKED:
			return tickBox(state, action)
		default:
			return state;
	}
};

export default exercise;
