import {render} from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {Router, Route, browserHistory} from 'react-router';
import React from 'react';
import reducer from './reducers/index';

import middlewareLogin from './middlewares/login';
import middlewareAdminPage from './middlewares/adminPage';
import middlewareConductorPage from './middlewares/conductorPage';

import AdminPage from './containers/adminPage';
import Login from './containers/login';
import ConductorPage from './containers/conductorPage';


const createMiddlewareStore = applyMiddleware(middlewareLogin,middlewareAdminPage,middlewareConductorPage)(createStore);

const store = createMiddlewareStore(reducer);

render(<Provider store={store}>
    <Router history={browserHistory}>
        <Route path="/" component={Login}/>
        <Route path="/adminPage" component={AdminPage}/>
        <Route path="/conductorPage" component={ConductorPage}/>
    </Router>
</Provider>, document.getElementById("content"));
