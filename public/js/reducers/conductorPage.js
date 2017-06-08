export default (state = {returnTip:false}, action) => {
    if(action.type === "GET_RETURN_TICKET_TI3P") {
        state.returnTip = action.data;
        return Object.assign({}, state);
    }
    return state;
}