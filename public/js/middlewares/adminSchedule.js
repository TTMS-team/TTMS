import request from 'superagent';

export default store => next => action => {
    if (action.type === "GET_SCHEDULE_LIST") {
        request.get('/getScheduleList')
            .end((err, res) => {
                next({type:"SHOW_SCHEDULE_LIST", data: JSON.parse(res.body)});
            });
    }else if(action.type==="DELETE_SCHEDULE"){
        request.get(`/deleteSchedule/${action.sched_id}`)   
            .end((err, res) => {
                next({type:"GET_DELETE_SCHEDULE_RESULT", data:res.body });
            });
    }else if(action.type === "SEARCH_SCHEDULE_BY_ID") {
        request.get(`/searchSchedule/${action.sched_id}`)
            .end((err, res) => {
                // console.log(res.body)
                next({type:"SHOW_SCHEDULE_LIST", data: JSON.parse(res.body)});
            });
    }else if(action.type ==="ADD_SCHEDULE"){
        request.post(`/addSchedule`)
            .send(action.info)
            .end((err, res) => {
                console.log(res.body);
                next({type:"GET_ADD_SCHEDULE_TIP", data: res.body});
            });
    }
    else
        next(action);
};