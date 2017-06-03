import request from 'superagent';

export default store => next => action => {
    if (action.type === "GET_OLD_EMPLOYEE_INFO") {
        request.get(`/getOldEmployeeInfo/${action.emp_id}`)
            .end((err, res) => {
                next({type:"GET_ADD_EMPLOYEE_TIP", data: res.body});
            });
    }else if(action.type==="ADD_EMPLOYEE"){
        request.post(`/addEmployee`)
            .send(action.info)
            .end((err, res) => {
                next({type:"GET_ADD_EMPLOYEE_TIP", data: res.body});
            });
    }
    else
        next(action);
};