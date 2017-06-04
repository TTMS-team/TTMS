import {combineReducers} from 'redux';
import login from "./login";
import adminPage from './adminPage';
import conductorPage from './conductorPage';
import schedulePage from './schedulePage';
import seatPage from './seatPage';
import employee from './employee';
import studio from './studio';

export default combineReducers({
    login,
    adminPage,
    conductorPage,
    schedulePage,
    seatPage,
    employee,
    studio
});
