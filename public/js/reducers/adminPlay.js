export default (state = {playList:[],deleteTip:false,addPlayTip: false,updatePlayTip:false}, action) => {
    if(action.type === "SHOW_PLAY_LIST") {
        // console.log(action.data)
        state.addPlayTip=false;
        state.deleteTip=false;
        state.updatePlayTip=false;
        state.playList = action.data;
        return Object.assign({}, state);
    }else if(action.type==="GET_DELETE_PLAY_RESULT"){
        state.deleteTip = action.data;
        return Object.assign({}, state);
    }else if(action.type === 'GET_ADD_PLAY_TIP') {
        state.addPlayTip = action.data;
        return Object.assign({}, state);
    }else if(action.type==="GET_UPDATE_PLAY_TIP"){
        state.updatePlayTip = action.data;
        return Object.assign({}, state);
    }
    return state;
}
