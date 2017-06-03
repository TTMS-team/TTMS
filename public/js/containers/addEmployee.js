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
        addEmployee:(info)=>{
            dispatch({type:"ADD_EMPLOYEE",info});
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(addEmployee);