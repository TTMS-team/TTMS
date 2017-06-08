import request from 'superagent';

export default store => next => action => {
    if (action.type === "RETURN_TICKET") {
        request.get(`/returnTicket/${action.ticket_id}`)
            .end((err, res) => {
                console.log(res.body);
                next({type:"GET_RETURN_TICKET_TIP", data: res.body});
            });
    }
    else
        next(action);
};