import ConductorPage from "../components/conductorPage";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
         playList:state.play.playList
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getPlayList:()=>{
            dispatch({type:"GET_PLAY_LIST"});
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ConductorPage);