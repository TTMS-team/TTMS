// import request from 'superagent';
//
// export default store => next => action => {
//     if (action.type === "SEARCH_EMPLOYEE_BY_ID") {
//         request.get(`/searchEmployee/${action.emp_id}`)
//             .end((err, res) => {
//                 next({type:"SHOW_EMPLOYEE_LIST", data: JSON.parse(res.body)});
//             });
//     }
//     else
//         next(action);
// };