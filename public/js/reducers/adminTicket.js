export default (state = {ticketList: [],deleteTip:false}, action) => {
    if(action.type === "SHOW_TICKET_LIST") {
        state.ticketList = action.data;
        state.deleteTip=false;
        return Object.assign({}, state);
    }else if(action.type==="GET_DELETE_TICKET_RESULT"){
        console.log(action.data);
        state.deleteTip = action.data;
        return Object.assign({}, state);
    }
    return state;
}