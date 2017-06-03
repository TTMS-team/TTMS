export default (state = {employeeList:[],deleteTip:false,addEmployeeTip: false}, action) => {
    if(action.type === "SHOW_EMPLOYEE_LIST") {
        state.addEmployeeTip=false;
        state.deleteTip=false;
        state.employeeList = action.data;
        return Object.assign({}, state);
    }else if(action.type==="GET_DELETE_RESULT"){
        state.deleteTip = action.data;
        return Object.assign({}, state);
    }else if(action.type === 'GET_ADD_EMPLOYEE_TIP') {

        state.addEmployeeTip = action.data;
        return Object.assign({}, state);
    }
    return state;
}
