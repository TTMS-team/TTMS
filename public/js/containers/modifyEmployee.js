import addEmployee from "../components/addEmployee";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        addEmployeeTip:state.addEmployee.addEmployeeTip
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        // this.props.addEmployee(info)
        getOldEmployeeInfo:(emp_id)=>{
            dispatch({type:"GET_OLD_EMPLOYEE_INFO",emp_id});
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(addEmployee);