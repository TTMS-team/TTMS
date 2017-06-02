export default (state = {employeeList:[],deleteTip:""}, action) => {
    if(action.type === "SHOW_EMPLOYEE_LIST") {
        // console.log(action.data)
        state.employeeList = action.data;
        return Object.assign({}, state);
    }else if(action.type==="GET_DELETE_RESULT"){
        state.deleteTip = action.data;
        return Object.assign({}, state);
    }
    return state;
}
