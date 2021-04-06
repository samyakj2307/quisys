import React, {useContext} from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import FacultyLogin from "./components/Faculty/FacultyLogin";
import StudentSignUp from "./components/Student/StudentSignUp";
import FacultySignUp from "./components/Faculty/FacultySignUp";
import FacultyQuestionPaperPage from "./components/FacultyQuestionPaperPage/FacultyQuestionPaperPage";
import {QuestionProvider} from "./components/FacultyQuestionPaperPage/FacultyQuestionContext"
import {QuestionAnswerProvider} from "./context/StudentQuestionAnswerContext"
import StudentQuestionPaperPage from "./components/StudentQuestionPaperPage/StudentQuestionPaperPage";
import StudentLogin from "./components/Student/StudentLogin";
import {LoginContext} from "./context/LoginContext";
import MainPage from "./components/MainPage/MainPage";
import {FacultyContextProvider} from "./context/FacultyContext";
import {StudentContextProvider} from "./context/StudentContext";

function App() {

    const {Faculty, Student} = useContext(LoginContext);
    const [facultyIsLoggedIn, setFacultyIsLoggedIn] = Faculty;
    const [studentIsLoggedIn, setStudentIsLoggedIn] = Student;

    return (
        <div>
            <Switch>
                {/*HomePage*/}
                <Route exact path={"/"} component={HomePage}/>

                <Route exact path={"/MainPage"} component={MainPage}/>

                <FacultyContextProvider>
                    <StudentContextProvider>
                    {/*FacultyLogin*/}
                    <Route exact path="/FacultyLogin">
                        {facultyIsLoggedIn ? <Redirect to="/SetQuestionPaper"/> : <FacultyLogin/>}
                    </Route>

                    {/*Faculty SignUp*/}
                    <Route exact path={"/FacultySignUp"} component={FacultySignUp}/>

                    {/*Faculty Set Question Paper*/}
                    <Route exact path="/SetQuestionPaper">
                        {facultyIsLoggedIn ?
                            (<QuestionProvider>
                                <FacultyQuestionPaperPage/>
                            </QuestionProvider>) :
                            <Redirect to="/FacultyLogin"/>}
                    </Route>

                    {/*StudentLogin*/}
                    <Route exact path="/StudentLogin">
                        {studentIsLoggedIn ? <Redirect to="/GiveExam"/> : <StudentLogin/>}
                    </Route>

                    {/*Student SignUp*/}
                    <Route exact path={"/StudentSignUp"} component={StudentSignUp}/>

                    {/*Student Give Question Paper*/}
                    <Route exact path="/GiveExam">
                        {studentIsLoggedIn ?
                            <QuestionAnswerProvider><StudentQuestionPaperPage/></QuestionAnswerProvider> :
                            <Redirect to="/StudentLogin"/>}
                    </Route>
                </StudentContextProvider>
                </FacultyContextProvider>
            </Switch>
        </div>
    );

}

export default App;