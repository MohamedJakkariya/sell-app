/** @format */

// TODO: create a simple reducer function
const reducer = (state = {}, action) => {
	switch (action.type) {
		case 'TEST':
			return { ...state, foo: action.payload };
		default:
			break;
	}
};

export default reducer;
