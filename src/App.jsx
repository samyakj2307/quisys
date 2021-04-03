import React, {useContext} from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import FacultyLogin from "./components/Faculty/FacultyLogin";
import StudentSignUp from "./components/Student/StudentSignUp";
import FacultySignUp from "./components/Faculty/FacultySignUp";
import FacultyQuestionPaperPage from "./components/FacultyQuestionPaperPage/FacultyQuestionPaperPage";
import {QuestionProvider} from "./context/FacultyQuestionContext"
import {QuestionAnswerProvider} from "./context/StudentQuestionAnswerContext"
import StudentQuestionPaperPage from "./components/StudentQuestionPaperPage/StudentQuestionPaperPage";
import {FacultyLoginContext} from "./context/FacultyLoginContext";
import {StudentLoginContext} from "./context/StudentLoginContext";
import StudentLogin from "./components/Student/StudentLogin";

function App() {

    const [facultyIsLoggedIn, setFacultyIsLoggedIn] = useContext(FacultyLoginContext);
    const [studentIsLoggedIn, setStudentIsLoggedIn] = useContext(StudentLoginContext);

    return (
        <div>
            <Switch>
                {/*HomePage*/}
                <Route exact path={"/"} component={HomePage}/>

                {/*FacultyLogin*/}
                <Route exact path="/FacultyLogin">
                    {facultyIsLoggedIn ? <Redirect to="/SetQuestionPaper"/> : <FacultyLogin/>}
                </Route>

                {/*StudentLogin*/}
                <Route exact path="/StudentLogin">
                    {studentIsLoggedIn ? <Redirect to="/GiveExam"/> : <StudentLogin/>}
                </Route>

                {/*Faculty SignUp*/}
                <Route exact path={"/FacultySignUp"} component={FacultySignUp}/>

                {/*Student SignUp*/}
                <Route exact path={"/StudentSignUp"} component={StudentSignUp}/>

                {/*Faculty Set Question Paper*/}
                <Route exact path="/SetQuestionPaper">
                    {facultyIsLoggedIn ? <QuestionProvider><FacultyQuestionPaperPage/></QuestionProvider> :
                        <Redirect to="/FacultyLogin"/>}
                </Route>

                {/*Student Give Question Paper*/}
                <Route exact path="/GiveExam">
                    {studentIsLoggedIn ? <QuestionAnswerProvider><StudentQuestionPaperPage/></QuestionAnswerProvider> :
                        <Redirect to="/StudentLogin"/>}
                </Route>
            </Switch>
        </div>
    );
}

export default App;