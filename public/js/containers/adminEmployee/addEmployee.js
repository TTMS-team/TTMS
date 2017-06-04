import addEmployee from "../../components/adminEmployee/addEmployee";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        addEmployeeTip:state.employee.addEmployeeTip
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addEmployee:(info)=>{
            dispatch({type:"ADD_EMPLOYEE",info});
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(addEmployee);