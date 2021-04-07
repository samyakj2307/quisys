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
import FacultyHomePage from "./components/Faculty/FacultyHomePage";
import StudentHomePage from "./components/Student/StudentHomePage";
import {CurrentFacultyContextProvider} from "./context/CurrentFacultyContext";
import {CurrentStudentContextProvider} from "./context/CurrentStudentContext";

function App() {

    const {Faculty, Student} = useContext(LoginContext);
    const [facultyIsLoggedIn, setFacultyIsLoggedIn] = Faculty;
    const [studentIsLoggedIn, setStudentIsLoggedIn] = Student;

    return (
        <div>
            <CurrentFacultyContextProvider>
                <CurrentStudentContextProvider>
                    <Switch>
                        {/*HomePage*/}
                        <Route exact path={"/"} component={HomePage}/>

                        {/*FacultyLogin*/}
                        <Route exact path="/FacultyLogin">
                            {facultyIsLoggedIn ? <Redirect to="/FacultyHomePage"/> : <FacultyLogin/>}
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
                            {studentIsLoggedIn ? <Redirect to="/StudentHomePage"/> : <StudentLogin/>}
                        </Route>

                        {/*Student SignUp*/}
                        <Route exact path={"/StudentSignUp"} component={StudentSignUp}/>

                        {/*Student Give Question Paper*/}
                        <Route exact path="/GiveExam">
                            {studentIsLoggedIn ?
                                <QuestionAnswerProvider><StudentQuestionPaperPage/></QuestionAnswerProvider> :
                                <Redirect to="/StudentLogin"/>}
                        </Route>


                        {/*Faculty HomePage*/}
                        <Route exact path="/FacultyHomePage">
                            {facultyIsLoggedIn ? (<FacultyHomePage/>) :
                                <Redirect to="/FacultyLogin"/>}
                        </Route>
                        {/*Student Homepage*/}
                        <Route exact path="/StudentHomePage">
                            {studentIsLoggedIn ? (<StudentHomePage/>) :
                                <Redirect to="/StudentLogin"/>}
                        </Route>

                    </Switch>
                </CurrentStudentContextProvider>
            </CurrentFacultyContextProvider>
        </div>
    );

}

export default App;