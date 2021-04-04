import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {LoginDataProvider} from "./context/LoginContext";

ReactDOM.render(<BrowserRouter>
        <LoginDataProvider>
            <App/>
        </LoginDataProvider>
    </BrowserRouter>,
    document.getElementById('root')
);

