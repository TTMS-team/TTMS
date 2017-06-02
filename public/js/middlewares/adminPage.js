import request from 'superagent';

export default store => next => action => {
    if (action.type === "GET_FILMS_LIST--") {
        request.get('/getFilmsList')
            .end((err, res) => {
                next({type:"GET_LOGIN_TIP", data: res.body});
            });
    }
    else
        next(action);
};