import modifyPlay from "../../components/adminPlay/modifyPlay";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        oldPlayInfo:state.play.playList   ,//[{}]  array.length==1
        updatePlayTip:state.play.updatePlayTip
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        // this.props.addPlay(info)
        getOldPlayInfo:(play_id)=>{
            dispatch({type:"SEARCH_PLAY_BY_ID",play_id});
        },
        updatePlayModify:(info)=>{
            dispatch({type:"UPDATE_PLAY_MODIFY",info})
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(modifyPlay);