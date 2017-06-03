import request from 'superagent';

export default store => next => action => {
    if (action.type === "GET_OLD_PLAY_INFO") {
        request.get(`/getOldPlayInfo/${action.play_id}`)
            .end((err, res) => {
                next({type:"GET_ADD_PLAY_TIP", data: res.body});
            });
    }else if(action.type==="ADD_PLAY"){
        request.post(`/addPlay`)
            .send(action.info)
            .end((err, res) => {
                next({type:"GET_ADD_Play_TIP", data: res.body});
            });
    }
    else
        next(action);
};
