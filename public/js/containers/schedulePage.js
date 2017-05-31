import SchedulePage from "../components/schedulePage";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        schedule:state.schedulePage.scheduleList
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getSchedule:(play_id)=>{
            dispatch({type:"GET_SCHEDULE",play_id});
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SchedulePage);
