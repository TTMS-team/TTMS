import AddSchedule from "../../components/adminSchedule/addSchedule";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        addScheduleTip:state.schedule.addScheduleTip
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addSchedule:(info)=>{
            dispatch({type:"ADD_SCHEDULE",info});
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddSchedule);