import request from 'superagent';

export default store => next => action => {
    if (action.type === "GET_STUDIO_LIST") {
        request.get(`/getStudioList`)
            .end((err, res) => {
                next({type:"SHOW_STUDIO_LIST", data:res.body});
            });
    }else if(action.type==="DELETE_STUDIO"){
        request.get(`/deleteStudio/${action.studio_id}`)
            .end((err, res) => {
                next({type:"GET_DELETE_RESULT", data:res.body });
            });
    }else if(action.type==="ADD_STUDIO"){
        request.post(`/addStudio`)
            .send(action.info)
            .end((err, res) => {
                next({type:"GET_ADD_STUDIO_TIP", data: res.body});
            });
    }else if(action.type === "SEARCH_STUDIO_BY_ID") {
        request.get(`/searchStudio/${action.studio_id}`)
            .end((err, res) => {
                next({type:"SHOW_STUDIO_LIST", data: res.body});
            });
    }else if(action.type==="UPDATE_STUDIO_MODIFY"){
        request.post(`/updateStudioModify`)
            .send(action.info)
            .end((err, res) => {
                next({type:"GET_UPDATE_STUDIO_TIP", data: res.body});
            });
    }
    else
        next(action);
};