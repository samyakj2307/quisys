import React from "react";
import {Route} from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import StudentLogin from "./components/Student/StudentLogin";
import FacultyLogin from "./components/Faculty/FacultyLogin";
import StudentSignUp from "./components/Student/StudentSignUp";
import FacultySignUp from "./components/Faculty/FacultySignUp";
import FacultyQuestionPaperPage from "./components/FacultyQuestionPaperPage/FacultyQuestionPaperPage";
import {QuestionProvider} from "./context/QuestionContext"

function App() {
    return (
        <div>
            <Route exact path={"/"} component={HomePage}/>
            <Route exact path={"/StudentLogin"} component={StudentLogin}/>
            <Route exact path={"/FacultyLogin"} component={FacultyLogin}/>
            <Route exact path={"/StudentSignUp"} component={StudentSignUp}/>
            <Route exact path={"/FacultySignUp"} component={FacultySignUp}/>
            <QuestionProvider>
            <Route exact path={"/SetQuestionPaper"} component={FacultyQuestionPaperPage}/>
            </QuestionProvider>
        </div>
    );
}

export default App;