export default (state = {studioList:[],deleteTip:false,addStudioTip: false,updateStudioTip:false}, action) => {
    if(action.type === "SHOW_STUDIO_LIST") {
        //重置status
        state.addStudioTip=false;
        state.deleteTip=false;
        state.updateStudioTip=false;
        //
        state.studioList = action.data;
        
        return Object.assign({}, state);
    }else if(action.type==="GET_DELETE_STUDIO_RESULT"){
        state.deleteTip = action.data;
        return Object.assign({}, state);
    }else if(action.type === 'GET_ADD_STUDIO_TIP') {
        console.log(action.data)
         state.addStudioTip = action.data;
        return Object.assign({}, state);
    }else if(action.type==="GET_UPDATE_STUDIO_TIP"){
        state.updateStudioTip = action.data;
        return Object.assign({}, state);
    }
    return state;
}