import AdminPage from "../components/adminPage";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        presentShow:state.adminPage.presentShow,
        employeeList:state.employee.employeeList,
        deleteEmployeeTip:state.employee.deleteTip,
        studioList:state.studio.studioList,
        deleteStudioTip:state.studio.deleteTip
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
        },
        searchEmployeeById:(emp_id)=>{
            dispatch({type:"SEARCH_EMPLOYEE_BY_ID",emp_id})
        },
        
        getStudioList:()=>{
            dispatch({type:"GET_STUDIO_LIST"})
        },
        searchStudioById:(studio_id)=>{
            dispatch({type:"SEARCH_STUDIO_BY_ID",studio_id})
        },
        deleteStudio:(studio_id)=>{
            dispatch({type:"DELETE_STUDIO",studio_id})
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminPage);