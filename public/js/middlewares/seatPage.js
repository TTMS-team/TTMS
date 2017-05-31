import request from 'superagent';

export default store => next => action => {
    if (action.type === 'GET_SEATS_LIST') {
        request.get(`/getSeatsList/${action.studio_id}`)
            .end((err, res) => {
                console.log(res.body)
                next({type:"SHOW_SEATS_LIST", data: res.body});
            });
    }
    else
        next(action);
};