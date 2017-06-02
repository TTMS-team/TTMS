import request from 'superagent';

export default store => next => action => {
    if (action.type === 'GET_EMPLOYEE_LIST') {
        request.get(`/getEmployeeList`)
            .end((err, res) => {
                next({type:"SHOW_EMPLOYEE_LIST", data:JSON.parse(res.body) });
            });
    }else if(action.type==="DELETE_EMPLOYEE"){
        // {type:"DELETE_EMPLOYEE",emp_id}
        request.get(`/deleteEmployee/${action.emp_id}`)
            .end((err, res) => {
                next({type:"GET_DELETE_RESULT", data:JSON.parse(res.body) });
            });
    }
    else
        next(action);
};