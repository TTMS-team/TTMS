export default (state = {scheduleList:[],deleteScheduleTip:false,addScheduleTip:""}, action) => {
    if(action.type === "SHOW_SCHEDULE_LIST") {
        state.scheduleList = action.data;
        state.deleteScheduleTip =false;
        state.addScheduleTip ="";
        return Object.assign({}, state);
    }else if(action.type==="GET_DELETE_SCHEDULE_RESULT"){
        state.deleteScheduleTip = action.data;
        return Object.assign({}, state);
    }else if(action.type === 'GET_ADD_SCHEDULE_TIP') {
        console.log(action.data.length);
        console.log(typeof action.data)
        state.addScheduleTip = action.data;
        return Object.assign({}, state);
    }
    return state;
}