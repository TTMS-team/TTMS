export default (state = {seats:[]}, action) => {
    if(action.type === "SHOW_SEATS") {
        state.seats = action.data;
        return Object.assign({}, state);
    }
    return state;
}
