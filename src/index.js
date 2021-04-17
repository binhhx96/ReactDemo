import React from "react";
import RouterFile from "./Router";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import './statics/scss/app.scss';

ReactDOM.render(
    <Router>
        <RouterFile />
    </Router>,
    document.getElementById('root'),
);