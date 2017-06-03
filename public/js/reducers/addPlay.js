export default (state = {addPlayTip: ""}, action) => {
    if(action.type === 'GET_ADD_PLAY_TIP') {
        state.addPlayTip = action.data;
        return Object.assign({}, state);
    }
    return state;
}
