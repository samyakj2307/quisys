import React, {useContext, useState} from "react";
import {Col, Row} from "react-bootstrap";
import FacultyQuestionBox from "./FacultyQuestionBox/FacultyQuestionBox";
import "./FacultyQuestionPaperPage.css"
import plusSign from "../../images/Group 27.svg";
import {FacultyQuestionContext} from "./FacultyQuestionContext"
import {v4 as uuid} from "uuid";
import quisysLogo from "../../images/quisysLogo.png";
import {SelectedClassContext} from "../../context/SelectedClassContext";
import {useHistory} from "react-router-dom";
import {FacultyQuizContext} from "../../context/FacultyQuizContext";

const axios = require("axios").default;

const baseUrl = "http://localhost:3000";

function FacultyQuestionPaperPage() {
    // Imported Questions List from FacultyQuestionContext.js
    const [questions, setQuestions] = useContext(FacultyQuestionContext);

    const [quizDetails, setQuizDetails] = useContext(FacultyQuizContext);
    //TODO Add Edit QuestionPaper axois Request (if else)


    const [examName, setExamName] = useState(quizDetails.examName);
    const [examDate, setExamDate] = useState(quizDetails.date);
    const [examDuration, setExamDuration] = useState(quizDetails.duration);
    const [examStartTime, setExamStartTime] = useState(quizDetails.startTime);
    const [examEndTime, setExamEndTime] = useState(quizDetails.endTime);

    const [selectedClass, setSelectedClass] = useContext(SelectedClassContext);

    const history = useHistory();
    console.log(history.location.state)

    function handleDateChange(event) {
        const date = event.target.value;
        setExamDate(date);
        setQuizDetails((prevDetails) => {
            prevDetails.date = date
            return (prevDetails)
        })
    }

    function handleDurationChange(event) {
        const duration = event.target.value;
        setExamDuration(duration);
        setQuizDetails((prevDetails) => {
            prevDetails.duration = duration
            return (prevDetails)
        })
    }

    function handleStartTimeChange(event) {
        const startTime = event.target.value;
        setExamStartTime(startTime);
        setQuizDetails((prevDetails) => {
            prevDetails.startTime = startTime
            return (prevDetails)
        })
    }

    function handleEndTimeChange(event) {
        const endTime = event.target.value;
        setExamEndTime(endTime);
        setQuizDetails((prevDetails) => {
            prevDetails.endTime = endTime
            return (prevDetails)
        })
    }

    function saveQuestionPaper() {
        // const examDetails = {
        //     "examName": examName,
        //     "duration": parseInt(examDuration),
        //     "date": examDate,
        //     "startTime": examStartTime,
        //     "endTime": examEndTime,
        //     "isCompleted": false,
        //     "allQuestions": questions
        // }

        setQuizDetails((prevDetails) => {
            prevDetails.allQuestions = questions
            return (prevDetails)
        })

        if (history.location.state === "New") {
            axios
                .post(baseUrl + "/addExam", {
                    cid: selectedClass.id,
                    examDetails: quizDetails
                })
                .then(function (response) {
                    console.log(response.status)
                    console.log(response.data)

                    if (response.status === 200 && response.data.status === "Added class Successfully") {
                        history.push('/FacultyHomePage');

                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
        } else if (history.location.state === "Edit") {
            axios
                .post(baseUrl + "/editExamQuestions", {
                    eid: quizDetails._id,
                    examDetails: quizDetails
                })
                .then(function (response) {
                    console.log(response.status)
                    console.log(response.data)

                    if (response.status === 200 && response.data === "Successfully Updated Exam Details") {
                        history.push('/FacultyHomePage');

                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
        }

    }

    // Adding Questions
    function addQuestionBox() {
        console.log(quizDetails)
        const TempID = uuid();
        setQuestions((prevState) => {
            const optionID = uuid();
            return [...prevState, {
                questionId: TempID,
                question: "",
                isText: false,
                textAnswer: "",
                options: [{optionId: optionID, value: ""}],
                correctOption: ""
            }]
        })
    }

    function handleExamNameChange(event) {
        const name = event.target.value;
        setExamName(name);
        setQuizDetails((prevDetails) => {
            prevDetails.examName = name
            return (prevDetails)
        })

    }

    return (
        <div className={"mainQuestionContainer"}>
            <Row className={"examDetails"}>
                <Col style={{textAlign: "center"}} md={2}>
                    <img className={"quisysLogo quisysLogo2"} src={quisysLogo} alt={"quisys-logo"}/>
                </Col>
                <Col style={{textAlign: "center", padding: "0 5%"}} className={"ExamHeading"} md={8}>
                    {examName} Exam
                </Col>
                <Col md={2}>
                </Col>
            </Row>

            <Row className={"examDetails"}>
                <Col style={{textAlign: "center"}} className={"ExamHeading InputLabel"}>
                    Exam Name
                    <input
                        className={"quizDataInput"}
                        placeholder={"Name"}
                        type={"text"}
                        onChange={handleExamNameChange}
                        value={examName}/>
                </Col>
                <Col style={{textAlign: "center"}} className={"ExamHeading InputLabel"}>
                    Duration
                    <input
                        onChange={handleDurationChange}
                        className={"quizDataInput durationBox"}
                        placeholder={"Minutes"}
                        type={"number"}
                        min={"1"}
                        value={examDuration}/>
                </Col>
                <Col style={{textAlign: "center"}} className={"ExamHeading InputLabel"}>
                    Date
                    <input
                        onChange={handleDateChange}
                        id={"examDate"}
                        className={"quizDataInput"}
                        placeholder={"Exam Date"}
                        type={"date"}
                        value={examDate}/>
                </Col>
                <Col style={{textAlign: "center", display: "inline"}} className={"ExamHeading InputLabel"}>
                    Start Time
                    <input
                        onChange={handleStartTimeChange}
                        className={"quizDataInput"}
                        placeholder={"Exam Start Timing"}
                        type={"time"}
                        value={examStartTime}/>
                </Col>
                <Col style={{textAlign: "center", display: "inline-block"}} className={"ExamHeading InputLabel"}>
                    End Time
                    <input
                        onChange={handleEndTimeChange}
                        id={"endTime"}
                        className={"quizDataInput"}
                        placeholder={"Exam End Timing"}
                        type={"time"}
                        value={examEndTime}/>
                </Col>
            </Row>

            <Row className={"facultyQuestionBoxContainer"}>
                <Col style={{textAlign: "center"}}>
                    {
                        questions.map((questionItem, qno) => {
                            return (
                                <FacultyQuestionBox

                                    key={questionItem.questionId}
                                    id={questionItem.questionId}
                                    index={qno}
                                />
                            )
                        })
                    }
                </Col>
            </Row>
            <Row>
                <Col style={{textAlign: "center"}}>
                    <button
                        className={"facultyAddButton addButton"}
                        onClick={addQuestionBox}><img src={plusSign} alt={"Add Question"}/></button>
                </Col>
            </Row>
            <Row>
                <Col style={{textAlign: "center"}}>
                    <button
                        className={"saveQuestionPaper"}
                        onClick={saveQuestionPaper}>Save
                    </button>
                </Col>
            </Row>
        </div>
    )
}

export default FacultyQuestionPaperPage;
