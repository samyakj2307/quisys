import React, {useContext, useState} from "react";
import {Col, Container, Row} from "react-bootstrap";
import FacultyQuestionBox from "./FacultyQuestionBox/FacultyQuestionBox";
import "./FacultyQuestionPaperPage.css"
import plusSign from "../../images/Group 27.svg";
import {FacultyQuestionContext} from "./FacultyQuestionContext"
import {v4 as uuid} from "uuid";
import quisysLogo from "../../images/quisysLogo.png";

function FacultyQuestionPaperPage() {
    // Imported Questions List from FacultyQuestionContext.js
    const [questions, setQuestions] = useContext(FacultyQuestionContext);

    const [examName, setExamName] = useState("");
    const [examDate, setExamDate] = useState("");
    const [examDuration, setExamDuration] = useState("");
    const [examStartTime, setExamStartTime] = useState("");
    const [examEndTime, setExamEndTime] = useState("");

    function handleDateChange(event) {
        const date = event.target.value;
        setExamDate(date);
    }

    function handleDurationChange(event) {
        const duration = event.target.value;
        setExamDuration(duration);
    }

    function handleStartTimeChange(event) {
        const duration = event.target.value;
        setExamStartTime(duration);
    }

    function handleEndTimeChange(event) {
        const duration = event.target.value;
        setExamEndTime(duration);
    }

    function saveQuestionPaper() {
    }

    // Adding Questions
    function addQuestionBox() {
        const TempID = uuid();
        setQuestions((prevState) => {
            const optionID = uuid();
            return [...prevState, {
                questionId: TempID,
                value: {
                    question: "",
                    isText: false,
                    textAnswer: "",
                    options: [{optionId: optionID, value: ""}],
                    correctOption: ""
                }
            }]
        })
    }

    function handleExamNameChange(event) {
        const value = event.target.value;
        setExamName(value);

    }

    return (
        <div className={"mainQuestionContainer"}>
            <Row className={"examDetails"} >
                <Col style={{textAlign: "center"}} md={2}>
                    <img className={"quisysLogo quisysLogo2"} src={quisysLogo}/>
                </Col>
                <Col style={{textAlign: "center",padding:"0 5%"}} className={"ExamHeading"} md={8}>
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
                                    key={questionItem.id}
                                    id={questionItem.id}
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

export default FacultyQuestionPaperPage
