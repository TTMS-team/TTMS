import request from 'superagent';

export default store => next => action => {
    if (action.type === 'GET_SCHEDULE') {
        request.get(`/getSchedule/${action.play_id}`)
            .end((err, res) => {
                console.log(res.body);
                next({type:"SHOW_SCHEDULE", data: res.body});
            });
    }
    else
        next(action);
};