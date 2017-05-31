import {combineReducers} from 'redux';
import login from "./login";
import adminPage from './adminPage';
import conductorPage from './conductorPage'
import schedulePage from './schedulePage'
import seatPage from './seatPage'

export default combineReducers({
    login,
    adminPage,
    conductorPage,
    schedulePage,
    seatPage
});
