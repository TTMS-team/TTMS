import request from 'superagent';

export default store => next => action => {
    if (action.type === 'GET_FILMS_LIST') {
        request.get('/getFilmsList')
            .end((err, res) => {
                console.log(res.body)
                next({type:"SHOW_FILMS_LIST", data: res.body});
            });
    }
    else
        next(action);
};