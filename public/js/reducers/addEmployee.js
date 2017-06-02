export default (state = {addEmployeeTip: ""}, action) => {
    if(action.type === 'GET_ADD_EMPLOYEE_TIP') {
        state.addEmployeeTip = action.data;
        return Object.assign({}, state);
    }
    return state;
}