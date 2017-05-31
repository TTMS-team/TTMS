import {combineReducers} from 'redux';
import login from "./login";
import adminPage from './adminPage';
import conductorPage from './conductorPage'

export default combineReducers({
    login,
    adminPage,
    conductorPage
});
