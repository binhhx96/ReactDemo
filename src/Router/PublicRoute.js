import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import storage from "../Utils/storage";

const PublicRoute = ({ component: Component, restricted, ...rest }) => (
    <Route {...rest} render={props => {
        const isAuthenticated = !!storage.get("_token");
        return isAuthenticated ? <Redirect to={ { pathname: '/home' } }/> : <Component { ...props } />;
    }} />
)


export default PublicRoute;