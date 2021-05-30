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
import {StudentAnswersheetContext} from "../../../../../context/StudentAnswersheetContext";
import {StudentDetailsContext} from "../../../../../context/StudentDetailsContext";
import {ExamStudentListContext} from "../../../../../context/ExamStudentListContext";

const axios = require("axios").default;

const baseUrl = "http://localhost:3000";

function ListRow(props) {

    const [quizDetails, setQuizDetails] = useContext(FacultyQuizContext);
    const [questions, setQuestions] = useContext(FacultyQuestionContext);

    const [currentQuizDetails, setCurrentQuizDetails] = useContext(SelectedQuizContext)

    const [questionAnswer, setQuestionAnswer] = useContext(StudentQuestionAnswerContext);

    const [studentAnswerSheet, setStudentAnswerSheet] = useContext(StudentAnswersheetContext);

    // Current Student Details
    const [currentStudentDetails, setCurrentStudentDetails] = useContext(StudentDetailsContext);

    const [examStudentDetails, setExamStudentDetails] = useContext(ExamStudentListContext)

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
                setCurrentQuizDetails(response.data)
                setQuestionAnswer(response.data.allQuestions)
                let studentAnswerSheet = []
                for (let i = 0; i < response.data.allQuestions.length; i++) {
                    const questions = response.data.allQuestions[i];
                    questions.qid = questions._id
                    questions.answered = ""
                    const {correctOption, _id, isText, textAnswer, options, ...currentQuestion} = questions
                    studentAnswerSheet = [...studentAnswerSheet, currentQuestion]
                }

                setStudentAnswerSheet({
                    sid: currentStudentDetails._id,
                    studentName: currentStudentDetails.name,
                    studentEmail: currentStudentDetails.email,
                    examName: props.examName,
                    eid: props.examId,
                    studentAnswerSheet: studentAnswerSheet
                })
                history.push("/GiveExam")

            })
            .catch(function (error) {
                console.log(error);
            });
    }

    function handleCheckPaper(){
        axios
            .get(baseUrl + "/getVerifiedResponses", {
                params: {
                     eid:props.examId
                },
            })
            .then(function (response) {
                console.log(response);
                setExamStudentDetails(response.data)
                history.push("/ExamStudentList")
            })
    }

    function isQuizOver(){
        let bool = false;
        for(let i=0;i<currentStudentDetails.allExamsCompleted.length;i++){
            console.log(props.examId)
            if(props.examId===currentStudentDetails.allExamsCompleted[i]){
                console.log("Hello")
                bool = true;
                break;
            }
        }
        return bool

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
                                <button className={"ListComponentButton"} onClick={handleCheckPaper}>Check Answers</button> :
                                <button className={"ListComponentButton"} onClick={handleEditQuiz}> Edit Quiz
                                </button>
                            }
                        </Col> :
                        <Col>
                            {/*TODO Add Is Checked*/}
                            {isQuizOver() ?
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