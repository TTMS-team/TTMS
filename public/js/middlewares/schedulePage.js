import request from 'superagent';

export default store => next => action => {
    if (action.type === 'GET_SCHEDULE_LIST_BY_PLAY_ID') {
        request.get(`/getScheduleListByPlayId/${action.play_id}`)
            .end((err, res) => {
                next({type:"SHOW_SCHEDULE_LIST", data: JSON.parse(res.body)});
            });
    }
    else
        next(action);
};