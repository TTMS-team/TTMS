import request from 'superagent';

export default store => next => action => {
    if (action.type === "GET_STUDIO_INFO") {
        request.get(`/searchStudio/${action.studio_id}`)
            .end((err, res) => {
                console.log(res.body)
                next({type:"SHOW_STUDIO_LIST", data: JSON.parse(res.body)});
            });
    }
    else
        next(action);
};