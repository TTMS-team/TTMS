import request from 'superagent';

export default store => next => action => {
    if (action.type === "GET_OLD_EMPLOYEE_INFO_") {
        request.post(`/`)
            .send(action.info)
            .end((err, res) => {
                next({type:"GET_ADD_EMPLOYEE_TIP", data: res.body});
            });
    }else if(action.type==="UPDATE_EMPLOYEE_MODIFY"){
        request.post(`/updateEmployeeModify`)
            .send(action.info)
            .end((err, res) => {
                console.log(typeof res.body);
                next({type:"GET_UPDATE_EMPLOYEE_TIP", data: res.body});
            });
    }
    else
        next(action);
};