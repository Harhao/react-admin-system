const initialState = {
    isTokenTimeout: false,
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case 'CHANGETIMEOUT':
            return {
                isTokenTimeout: !state.isTokenTimeout
            };
        default:
            return {
                isTokenTimeout: state.isTokenTimeout
            };
    }
}
export default reducer;