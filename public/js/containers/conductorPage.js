import ConductorPage from "../components/conductorPage";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
          films:state.conductorPage.films
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getFilms:()=>{
            dispatch({type:"GET_FILMS_LIST"});
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ConductorPage);