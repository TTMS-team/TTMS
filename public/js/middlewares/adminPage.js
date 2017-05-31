
import request from 'superagent';

export default store => next => action => {
    if (action.type === 'LOGIN_SUBMIT') {
        request.get('/login')
            .end((err, res) => {
                next({type:"GET_LOGIN_TIP", data: res.body});
            });
    }
    else
        next(action);
};