import React, { Component } from "react";
import {Route,Switch} from "react-router-dom";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";
import Login from "../Pages/Login";
import Home from "../Pages/Home";
import NotFound from "../Pages/404";

class RouterFile extends Component {
    render() {
        return (
            <div className="root">
                <Switch>
                    <PublicRoute exact path="/" component={Home}/>
                    <PublicRoute exact path="/login" component={Login}/>
                    <PrivateRoute exact path="/home" component={Home}/>
                    <Route component={NotFound}/>
                </Switch>
            </div>
        );
    }
}

export default RouterFile;