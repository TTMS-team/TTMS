export default (state = {presentShow: ""}, action) => {
    if(action.type === 'GET_PRESENT_SHOW') {
        state.presentShow = action.target;
        return Object.assign({}, state);
    }
    return state;
}
