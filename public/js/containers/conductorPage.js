import ConductorPage from "../components/conductorPage";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
         playList:state.play.playList,
        returnTip:state.play.returnTip
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getPlayList:()=>{
            dispatch({type:"GET_PLAY_LIST"});
        },
        confirmReturn:(ticket_id)=>{
            dispatch({type:"RETURN_TICKET",ticket_id})
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ConductorPage);