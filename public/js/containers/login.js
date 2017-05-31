import Login from "../components/login";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        loginTip: state.login.tip
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        
        onLogin:()=>{
            dispatch({type:"LOGIN_SUBMIT"});
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);