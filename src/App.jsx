import React from "react";
import {Route,Link} from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import LoginPage from "./components/LoginPage/LoginPage";
import StudentLogin from "./components/StudentLogin";
import FacultyLogin from "./components/FacultyLogin";

function App() {
    return (
        <div>
            <Route exact path={"/"} component={HomePage}/>
            <Route exact path={"/StudentLogin"} component={StudentLogin}/>
            <Route exact path={"/FacultyLogin"} component={FacultyLogin}/>
        </div>
    );
    // return (<SignInBox/>);
    //return (<LoginPage/>);
}

export default App;