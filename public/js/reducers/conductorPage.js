export default (state = {films:[]}, action) => {
    if(action.type === "SHOW_FILMS_LIST") {
        state.films = action.data;
        return Object.assign({}, state);
    }
    return state;
}