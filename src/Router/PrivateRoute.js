import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import storage from "../Utils/storage";

const PrivateRoute = ({ component: Component, ...rest }) => {
    const isAuthenticated = storage.get("_token");
    return (
        <Route {...rest} render={props => (isAuthenticated ? <Component {...props} /> :
            <Redirect to="/login" />)} />
    )
}


export default PrivateRoute;