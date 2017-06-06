import modifyStudio from "../../components/adminStudio/modifyStudio";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        oldStudioInfo:state.studio.studioList   ,//[{}]  array.length==1
        updateStudioTip:state.studio.updateStudioTip
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        // this.props.addEmployee(info)
        getOldStudioInfo:(studio_id)=>{
            dispatch({type:"SEARCH_STUDIO_BY_ID",studio_id});
        },
        updateStudioModify:(info)=>{
            dispatch({type:"UPDATE_STUDIO_MODIFY",info})
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(modifyStudio);