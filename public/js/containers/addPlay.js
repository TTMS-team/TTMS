import addEmployee from "../components/addPlay";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        addPlayTip:state.addPlay.addPlayTip
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        // this.props.addPlay(info)
        addPlay:(info)=>{
            dispatch({type:"ADD_PLAY",info});
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(addPlay);
