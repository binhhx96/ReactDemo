import React from "react";
import RouterFile from "./Router";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
    <Router>
        <RouterFile />
    </Router>,
    document.getElementById('root'),
);