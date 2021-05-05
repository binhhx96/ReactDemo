import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import storage from "../Utils/storage";

const PrivateRoute = ({ component: Component, ...rest }) => {
    const _token = storage.get("_token");
    return (
        <Route {...rest} render={props => (_token ? <Component {...props} /> :
            <Redirect to="/login" />)} />
    )
}


export default PrivateRoute;