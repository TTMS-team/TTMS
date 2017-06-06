import {combineReducers} from 'redux';
import login from "./login";
import adminPage from './adminPage';
import conductorPage from './conductorPage';
import schedulePage from './schedulePage';
import seatPage from './seatPage';
import employee from './adminEmployee';
import studio from './adminStudio';
import play from './adminPlay';
import ticket from './adminTicket';
import schedule from './adminSchedule';

export default combineReducers({
    login,
    adminPage,
    conductorPage,
    schedulePage,
    seatPage,
    employee,
    studio,
    play,
    ticket,
    schedule
});
