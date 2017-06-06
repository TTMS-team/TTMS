export default (state = {scheduleList:[],deleteTip:false}, action) => {
    if(action.type === "SHOW_SCHEDULE_LIST") {
        state.scheduleList = action.data;
        return Object.assign({}, state);
    }else if(action.type==="GET_DELETE_SCHEDULE_RESULT"){
        state.deleteTip = action.data;
        return Object.assign({}, state);
    }
    return state;
}