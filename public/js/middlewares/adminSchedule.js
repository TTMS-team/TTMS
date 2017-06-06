import request from 'superagent';

export default store => next => action => {
    if (action.type === "GET_SCHEDULE_LIST") {
        request.get('/getScheduleList')
            .end((err, res) => {
                next({type:"SHOW_SCHEDULE_LIST", data: JSON.parse(res.body)});
            });
    }else if(action.type==="DELETE_SCHEDULE"){
        request.get(`/deleteTicket/${action.ticket_id}`)
            .end((err, res) => {
                next({type:"GET_DELETE_TICKET_RESULT", data:res.body });
            });
    }
    else
        next(action);
};