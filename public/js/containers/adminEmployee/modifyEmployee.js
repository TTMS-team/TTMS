import modifyEmployee from "../../components/adminEmployee/modifyEmployee";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        oldEmployeeInfo:state.employee.employeeList   ,//[{}]  array.length==1
        updateEmployeeTip:state.employee.updateEmployeeTip
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        // this.props.addEmployee(info)
        getOldEmployeeInfo:(emp_id)=>{
            dispatch({type:"SEARCH_EMPLOYEE_BY_ID",emp_id});
        },
        upDateEmployeeModify:(info)=>{
            dispatch({type:"UPDATE_EMPLOYEE_MODIFY",info})
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(modifyEmployee);