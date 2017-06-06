import SchedulePage from "../components/schedulePage";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        scheduleList:state.schedule.scheduleList
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getScheduleListByPlayID:(play_id)=>{
            dispatch({type:"GET_SCHEDULE_LIST_BY_PLAY_ID",play_id});
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SchedulePage);
