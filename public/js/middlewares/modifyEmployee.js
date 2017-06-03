import request from 'superagent';

export default store => next => action => {
    if (action.type === "ADD_EMPLOYEE") {
        request.post(`/addEmployee`)
            .send(action.info)
            .end((err, res) => {
                next({type:"GET_ADD_EMPLOYEE_TIP", data: res.body});
            });
    }
    else
        next(action);
};