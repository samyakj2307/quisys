import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {FacultyLoginDataProvider} from "./context/FacultyLoginContext";
import {StudentLoginDataProvider} from "./context/StudentLoginContext";

ReactDOM.render(<BrowserRouter>
        <FacultyLoginDataProvider>
            <StudentLoginDataProvider>
            <App/>
        </StudentLoginDataProvider>
        </FacultyLoginDataProvider>
    </BrowserRouter>,
    document.getElementById('root')
);

