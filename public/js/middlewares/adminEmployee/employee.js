import request from 'superagent';

export default store => next => action => {
    if (action.type === 'GET_EMPLOYEE_LIST') {
        request.get(`/getEmployeeList`)
            .end((err, res) => {
                next({type:"SHOW_EMPLOYEE_LIST", data:JSON.parse(res.body) });
            });
    }else if(action.type==="DELETE_EMPLOYEE"){
        request.get(`/deleteEmployee/${action.emp_id}`)
            .end((err, res) => {
                next({type:"GET_DELETE_RESULT", data:res.body });
            });
    }else if (action.type === "GET_OLD_EMPLOYEE_INFO") {
        request.get(`/getOldEmployeeInfo/${action.emp_id}`)
            .end((err, res) => {
                next({type:"GET_ADD_EMPLOYEE_TIP", data: res.body});
            });
    }else if(action.type==="ADD_EMPLOYEE"){
        request.post(`/addEmployee`)
            .send(action.info)
            .end((err, res) => {
                // console.log(typeof res.body)
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