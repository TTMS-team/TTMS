import {render} from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {Router, Route, browserHistory} from 'react-router';
import React from 'react';
import reducer from './reducers/index';

import middlewareLogin from './middlewares/login';
import middlewareAdminPage from './middlewares/adminPage';
import middlewareConductorPage from './middlewares/conductorPage';
import middlewareSchedulePage from './middlewares/schedulePage';
import middlewareSeatPage from './middlewares/seatPage';
import middlewareEmployee from './middlewares/employee';
import middlewareAddEmployee from './middlewares/addEmployee';
import middlewareModifyEmployee from './middlewares/modifyEmployee';
//剧目
import middlewareAddPlay from './middlewares/addPlay';
import middlewareModifyPlay from './middlewares/modifyPlay';


import AdminPage from './containers/adminPage';
import Login from './containers/login';
import ConductorPage from './containers/conductorPage';
import SchedulePage from './containers/schedulePage';
import SeatPage from './containers/seatPage';
import addEmployee from './containers/addEmployee';
import modifyEmployee from "./containers/modifyEmployee";
//剧目
import addPlay from './containers/addPlay';
import modifyPlay from "./containers/modifyPlay";

const createMiddlewareStore = applyMiddleware(middlewareLogin,middlewareAdminPage,middlewareConductorPage,middlewareSchedulePage,middlewareSeatPage,middlewareEmployee)(createStore);


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
//剧目
        <Route path="/addPlay" component={addPlay}/>
        <Route path="/modifyPlay" component={modifyPlay}/>
</Router>
</Provider>, document.getElementById("content"));
