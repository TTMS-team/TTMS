import addStudio from "../../components/adminStudio/addStudio";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        addStudioTip:state.studio.addStudioTip
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addStudio:(info)=>{
            dispatch({type:"ADD_STUDIO",info});
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(addStudio);