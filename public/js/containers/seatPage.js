import SeatPage from "../components/seatPage";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        studioInfo:state.studio.studioList
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getStudioInfo:(studio_id)=>{
            dispatch({type:"GET_STUDIO_INFO",studio_id});
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SeatPage);
