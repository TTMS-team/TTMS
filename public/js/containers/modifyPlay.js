import addEmployee from "../components/addPlay";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        addPlayTip:state.addPlay.addPlayTip
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        // this.props.modifyPlay(info)
        getOldPlayInfo:(play_id)=>{
            dispatch({type:"GET_OLD_PLAY_INFO",play_id});
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(addPlay);
