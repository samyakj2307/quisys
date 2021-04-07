import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {LoginDataProvider} from "./context/LoginContext";
import {StudentContextProvider} from "./context/StudentContext";
import {FacultyContextProvider} from "./context/FacultyContext";

ReactDOM.render(<BrowserRouter>
    <FacultyContextProvider>
        <StudentContextProvider>
        <LoginDataProvider>
            <App/>
        </LoginDataProvider>
        </StudentContextProvider>
    </FacultyContextProvider>
    </BrowserRouter>,
    document.getElementById('root')
);

