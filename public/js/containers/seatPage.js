import SeatPage from "../components/seatPage";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        seats:state.conductorPage.seats
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getSeats:(studio_id)=>{
            dispatch({type:"GET_SEATS_LIST",studio_id});
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SeatPage);
