import React from "react";
import RouterFile from "./Router";
import ReactDOM from "react-dom";
import { Router } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './statics/scss/app.scss';
import history from "./Utils/history";

ReactDOM.render(
    <Router history={history}>
        <RouterFile />
    </Router>,
    document.getElementById('root'),
);