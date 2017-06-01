import AdminPage from "../components/adminPage";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
       presentShow:state.adminPage.presentShow
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getPresentShow:(target)=>{
             dispatch({type:"GET_PRESENT_SHOW",target});
         }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminPage);