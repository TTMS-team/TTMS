import AdminPage from "../components/adminPage";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        presentShow:state.adminPage.presentShow,
        //员工
        employeeList:state.employee.employeeList,
        deleteEmployeeTip:state.employee.deleteTip,
        //演出厅
        studioList:state.studio.studioList,
        deleteStudioTip:state.studio.deleteTip,
        //剧目
        playList:state.play.playList,
        deletePlayTip:state.play.deleteTip

    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getPresentShow:(target)=>{
             dispatch({type:"GET_PRESENT_SHOW",target});
         },
        //员工
        getEmployeeList:()=>{
            dispatch({type:"GET_EMPLOYEE_LIST"});
        },
        deleteEmployee:(emp_id)=>{
           dispatch({type:"DELETE_EMPLOYEE",emp_id})
        },
        searchEmployeeById:(emp_id)=>{
            dispatch({type:"SEARCH_EMPLOYEE_BY_ID",emp_id})
        },
        //演出厅
        getStudioList:()=>{
            dispatch({type:"GET_STUDIO_LIST"})
        },
        searchStudioById:(studio_id)=>{
            dispatch({type:"SEARCH_STUDIO_BY_ID",studio_id})
        },
        deleteStudio:(studio_id)=>{
            dispatch({type:"DELETE_STUDIO",studio_id})
        },
        //剧目
        getPlayList:()=>{
            dispatch({type:"GET_PLAY_LIST"})
        },
        searchPlayById:(play_id)=>{
            dispatch({type:"SEARCH_PLAY_BY_ID",play_id})
        },
        deletePlay:(play_id)=>{
            dispatch({type:"DELETE_PLAY",play_id});
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminPage);