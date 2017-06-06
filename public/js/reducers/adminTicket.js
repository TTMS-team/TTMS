export default (state = {ticketList: [],deleteTip:false}, action) => {
    if(action.type === "SHOW_TICKET_LIST") {
        state.ticketList = action.data;
        return Object.assign({}, state);
    }else if(action.type==="GET_DELETE_TICKET_RESULT"){
        state.deleteTip = action.data;
        return Object.assign({}, state);
    }
    return state;
}