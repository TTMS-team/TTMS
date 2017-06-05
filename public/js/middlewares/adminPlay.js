import request from 'superagent';

export default store => next => action => {
    if (action.type === "GET_PLAY_LIST") {
        request.get(`/getPlayList`)
            .end((err, res) => {
                // console.log(res.body)
                next({type:"SHOW_PLAY_LIST",
                    // data:JSON.parse(res.body)
                    data:res.body
                });
            });
    }else if(action.type==="SEARCH_PLAY_BY_ID"){
        request.get(`/searchPlay/${action.play_id}`)
            .end((err, res) => {
                next({type:"SHOW_PLAY_LIST", data: JSON.parse(res.body)});
            });
    }else if(action.type==="DELETE_PLAY"){
        request.get(`/deletePlay/${action.play_id}`)
            .end((err, res) => {
                next({type:"GET_DELETE_PLAY_RESULT", data:res.body });
            });
    }else if(action.type==="ADD_PLAY"){
        request.post(`/addPlay`)
            .send(action.info)
            .end((err, res) => {
                // console.log(typeof res.body)
                console.log(res.body);
                next({type:"GET_ADD_PLAY_TIP", data: res.body});
            });
    }else if(action.type==="UPDATE_PLAY_MODIFY"){
        request.post(`/updatePlayModify`)
            .send(action.info)
            .end((err, res) => {
                console.log(typeof res.body);
                next({type:"GET_UPDATE_PLAY_TIP", data: res.body});
            });
    }
    else
        next(action);
};