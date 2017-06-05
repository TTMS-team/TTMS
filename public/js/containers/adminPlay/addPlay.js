import addPlay from "../../components/adminPlay/addPlay";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        addPlayTip:state.play.addPlayTip
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addPlay:(info)=>{
            dispatch({type:"ADD_PLAY",info});
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(addPlay);