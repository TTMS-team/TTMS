export default (state = {scheduleList:[]}, action) => {
    if(action.type === "SHOW_SCHEDULE") {
        state.scheduleList = action.data;
        return Object.assign({}, state);
    }
    return state;
}
