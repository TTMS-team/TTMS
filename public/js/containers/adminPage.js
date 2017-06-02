import AdminPage from "../components/adminPage";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
       presentShow:state.adminPage.presentShow,
        employeeList:state.employee.employeeList,
        // deleteTip:state.employeeList.deleteTip
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getPresentShow:(target)=>{
             dispatch({type:"GET_PRESENT_SHOW",target});
         },
        getEmployeeList:()=>{
            dispatch({type:"GET_EMPLOYEE_LIST"});
        },
        deleteEmployee:(emp_id)=>{
           dispatch({type:"DELETE_EMPLOYEE",emp_id})
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminPage);