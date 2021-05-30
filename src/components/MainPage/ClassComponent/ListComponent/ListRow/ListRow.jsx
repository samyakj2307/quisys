import React, {useContext} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col, Row} from "react-bootstrap";
import "./ListRow.css"
import TimerIcon from '@material-ui/icons/Timer';
import EventIcon from '@material-ui/icons/Event';
import ScheduleIcon from '@material-ui/icons/Schedule';
import {useHistory} from "react-router-dom";
import {FacultyQuizContext} from "../../../../../context/FacultyQuizContext";
import {FacultyQuestionContext} from "../../../../FacultyQuestionPaperPage/FacultyQuestionContext";
import {SelectedQuizContext} from "../../../../../context/SelectedQuizContext(Student)";
import {StudentQuestionAnswerContext} from "../../../../../context/StudentQuestionAnswerContext";

const axios = require("axios").default;

const baseUrl = "http://localhost:3000";

function ListRow(props) {

    const [quizDetails, setQuizDetails] = useContext(FacultyQuizContext);
    const [questions, setQuestions] = useContext(FacultyQuestionContext);

    const [currentQuizDetails, setCurrentQuizDetails] = useContext(SelectedQuizContext)

    const [questionAnswer, setQuestionAnswer] = useContext(StudentQuestionAnswerContext);

    const history = useHistory();

    function handleEditQuiz() {
        axios
            .get(baseUrl + "/getExamQuestions", {
                params: {eid: props.examId}
            })
            .then(function (response) {
                console.log(response.data)
                setQuizDetails(response.data)
                setQuestions(quizDetails.allQuestions);
                history.push("/SetQuestionPaper", "Edit");

            })
            .catch(function (error) {
                console.log(error);
            });
    }

    function handleStartQuiz() {
        axios
            .get(baseUrl + "/getExamQuestions", {
                params: {eid: props.examId}
            })
            .then(function (response) {
                console.log(response.data)
                setCurrentQuizDetails(response.data)
                setQuestionAnswer(response.data.allQuestions)
                history.push("/GiveExam")

            })
            .catch(function (error) {
                console.log(error);
            });
    }


    return (
        <div className={"listRowContainer"}>
            <Row>
                <Col md={4} className={"SubjectRowNames"}>

                    {props.index + 1}. {props.examName}

                </Col>
                <Col md={5} className={"DateTime"}>
                    <Row>
                        <Col>
                            <TimerIcon/>{props.examDuration} Minutes
                            <br/>
                            <EventIcon/>{props.examDate}
                        </Col>
                        <Col>
                            <ScheduleIcon/>{props.examStartTime}-{props.examEndTime}
                        </Col>
                    </Row>
                </Col>
                <Col md={3} style={{textAlign: "center"}}>
                    {props.user === "Faculty" ?
                        <Col>
                            {props.isCompleted ?
                                <button className={"ListComponentButton"}>Check Answers</button> :
                                <button className={"ListComponentButton"} onClick={handleEditQuiz}> Edit Quiz
                                </button>
                            }
                        </Col> :
                        <Col>
                            {/*TODO Add Is Checked*/}
                            {props.isCompleted ?
                                <button className={"ListComponentButton"}>View Marks</button> :
                                <button className={"ListComponentButton"} onClick={handleStartQuiz}>Start Quiz</button>
                            }
                        </Col>
                    }
                </Col>
            </Row>
        </div>
    );
}

export default ListRow;