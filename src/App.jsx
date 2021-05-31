import React, {useContext} from "react";
import {Redirect, Route, Switch} from "react-router-dom";

import HomePage from "./components/HomePage/HomePage";

import StudentSignUp from "./components/Student/StudentSignUp";
import FacultySignUp from "./components/Faculty/FacultySignUp";

import FacultyQuestionPaperPage from "./components/FacultyQuestionPaperPage/FacultyQuestionPaperPage";
import StudentQuestionPaperPage from "./components/StudentQuestionPaperPage/StudentQuestionPaperPage";

import FacultyLogin from "./components/Faculty/FacultyLogin";
import StudentLogin from "./components/Student/StudentLogin";
import {QuestionAnswerProvider} from "./context/StudentQuestionAnswerContext";

import FacultyHomePage from "./components/Faculty/FacultyHomePage";
import StudentHomePage from "./components/Student/StudentHomePage";

import {LoginContext} from "./context/LoginContext";
import {FacultyDetailsContextProvider} from "./context/FacultyDetailsContext";
import {StudentDetailsContextProvider} from "./context/StudentDetailsContext";
import {ClassListContextProvider} from "./context/ClassListContext";
import {QuizListContextProvider} from "./context/QuizListContext";
import {SelectedClassContextProvider} from "./context/SelectedClassContext";
import {FacultyQuizContextProvider} from "./context/FacultyQuizContext";
import {QuestionProvider} from "./components/FacultyQuestionPaperPage/FacultyQuestionContext";
import {SelectedQuizContextProvider} from "./context/SelectedQuizContext(Student)";
import {StudentAnswersheetContextProvider} from "./context/StudentAnswersheetContext";
import {ExamStudentListContextProvider} from "./context/ExamStudentListContext";
import FacultyViewAnswersheet from "./components/FacultyViewAnswersheet/FacultyViewAnswersheet";
import FacultyAssignMarks from "./components/FacultyAssignMarks/FacultyAssignMarks";


function App() {
    const {Faculty, Student} = useContext(LoginContext);
    const [facultyIsLoggedIn, setFacultyIsLoggedIn] = Faculty;
    const [studentIsLoggedIn, setStudentIsLoggedIn] = Student;

    return (
        <div>
            <FacultyDetailsContextProvider>

                <StudentDetailsContextProvider>

                    <ClassListContextProvider>
                        <QuizListContextProvider>
                            <SelectedClassContextProvider>
                                <FacultyQuizContextProvider>

                                    <SelectedQuizContextProvider>
                                        <QuestionAnswerProvider>
                                            <StudentAnswersheetContextProvider>
                                                <ExamStudentListContextProvider>

                                                    <QuestionProvider>

                                                        <Switch>

                                                            {/*HomePage*/}
                                                            <Route exact path={"/"} component={HomePage}/>

                                                            {/*FacultyLogin*/}
                                                            <Route exact path="/FacultyLogin">
                                                                {facultyIsLoggedIn ? (
                                                                    <Redirect to="/FacultyHomePage"/>
                                                                ) : (
                                                                    <FacultyLogin/>
                                                                )}
                                                            </Route>

                                                            {/*Faculty SignUp*/}
                                                            <Route exact path={"/FacultySignUp"}
                                                                   component={FacultySignUp}/>

                                                            {/*Faculty Set Question Paper*/}
                                                            <Route exact path="/SetQuestionPaper">
                                                                {facultyIsLoggedIn ? (
                                                                    <FacultyQuestionPaperPage/>
                                                                ) : (
                                                                    <Redirect to="/FacultyLogin"/>
                                                                )}
                                                            </Route>

                                                            {/*StudentLogin*/}
                                                            <Route exact path="/StudentLogin">
                                                                {studentIsLoggedIn ? (
                                                                    <Redirect to="/StudentHomePage"/>
                                                                ) : (
                                                                    <StudentLogin/>
                                                                )}
                                                            </Route>

                                                            {/*Student SignUp*/}
                                                            <Route exact path={"/StudentSignUp"}
                                                                   component={StudentSignUp}/>

                                                            {/*Student Give Question Paper*/}
                                                            <Route exact path="/GiveExam">
                                                                {studentIsLoggedIn ? (
                                                                    <StudentQuestionPaperPage/>
                                                                ) : (
                                                                    <Redirect to="/StudentLogin"/>
                                                                )}
                                                            </Route>
                                                            {/*Faculty HomePage*/}
                                                            <Route exact path="/FacultyHomePage">
                                                                {facultyIsLoggedIn ? (
                                                                    <FacultyHomePage/>
                                                                ) : (
                                                                    <Redirect to="/FacultyLogin"/>
                                                                )}
                                                            </Route>
                                                            {/*Student Homepage*/}
                                                            <Route exact path="/StudentHomePage">
                                                                {studentIsLoggedIn ? (
                                                                    <StudentHomePage/>
                                                                ) : (
                                                                    <Redirect to="/StudentLogin"/>
                                                                )}
                                                            </Route>

                                                            {/*ViewAllStudentExamList*/}
                                                            <Route exact path="/ExamStudentList">
                                                                {facultyIsLoggedIn ? (
                                                                    <FacultyViewAnswersheet/>
                                                                ) : (
                                                                    <Redirect to="/FacultyLogin"/>
                                                                )}
                                                            </Route>

                                                            {/*VerifyAnswers*/}
                                                            <Route exact path="/VerifyAnswers">
                                                                <FacultyAssignMarks/>
                                                            </Route>
                                                        </Switch>
                                                    </QuestionProvider>

                                                </ExamStudentListContextProvider>

                                            </StudentAnswersheetContextProvider>

                                        </QuestionAnswerProvider>

                                    </SelectedQuizContextProvider>

                                </FacultyQuizContextProvider>
                            </SelectedClassContextProvider>
                        </QuizListContextProvider>
                    </ClassListContextProvider>
                </StudentDetailsContextProvider>
            </FacultyDetailsContextProvider>
        </div>
        // <FacultyViewAnswersheet/>
    );
}

export default App;
