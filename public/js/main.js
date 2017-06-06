import {render} from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {Router, Route, browserHistory} from 'react-router';
import React from 'react';
import reducer from './reducers/index';

import middlewareLogin from './middlewares/login';
import middlewareConductorPage from './middlewares/conductorPage';
import middlewareSchedulePage from './middlewares/schedulePage';
import middlewareSeatPage from './middlewares/seatPage';

import middlewareEmployee from './middlewares/adminEmployee';
import middlewareStudio from './middlewares/adminStudio';
import middlewarePlay from './middlewares/adminPlay';
import middlewareTicket from './middlewares/adminTicket';
import middlewareSchedule from './middlewares/adminSchedule';


import AdminPage from './containers/adminPage';
import Login from './containers/login';
import ConductorPage from './containers/conductorPage';
import SchedulePage from './containers/schedulePage';
import SeatPage from './containers/seatPage';

import addEmployee from './containers/adminEmployee/addEmployee';
import modifyEmployee from "./containers/adminEmployee/modifyEmployee";

import addStudio from './containers/adminStudio/addStudio';
import modifyStudio from './containers/adminStudio/modifyStudio';

import addPlay from './containers/adminPlay/addPlay';
import modifyPlay from './containers/adminPlay/modifyPlay'



const createMiddlewareStore = applyMiddleware(
    
    middlewareLogin,
    middlewareConductorPage,
    middlewareSchedulePage,
    middlewareSeatPage,
    
    middlewarePlay,
    middlewareEmployee,
    middlewareStudio,
    middlewareTicket,
    middlewareSchedule
)(createStore);


const store = createMiddlewareStore(reducer);

render(<Provider store={store}>
    <Router history={browserHistory}>
        <Route path="/" component={Login}/>
        <Route path="/adminPage" component={AdminPage}/>
        <Route path="/conductorPage" component={ConductorPage}/>
        <Route path="/schedulePage" component={SchedulePage}/>
        <Route path="/seatPage" component={SeatPage}/>
    
        <Route path="/addEmployee" component={addEmployee}/>
        <Route path="/modifyEmployee" component={modifyEmployee}/>
        
        <Route path="/addStudio" component={addStudio}/>
        <Route path="/modifyStudio" component={modifyStudio}/>

        <Route path="/addPlay" component={addPlay}/>
        <Route path="/modifyPlay" component={modifyPlay}/>


    </Router>
</Provider>, document.getElementById("content"));
