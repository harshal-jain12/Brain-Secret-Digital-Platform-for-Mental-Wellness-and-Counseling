import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from "./components/App";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./css/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import projectroute from "./projectroute";
import { RouterProvider} from "react-router-dom";


const result = ReactDOM.createRoot(document.getElementById('root'));
result.render(<RouterProvider router = {projectroute}/>);