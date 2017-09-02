import React from "react";
import {Router,Route,hashHistory} from 'react-router';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

export default class Routes extends React.Component {
    render() {
        return (
            <Router history={hashHistory}>
                <Route path='/' component={Register}>
                    <Route path="login" component={Login}/>
                    <Route path="register" component={Home}/>
                </Route>
            </Router>
        )
    }
}