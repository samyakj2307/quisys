import React, {useContext, useState} from "react";
import {Col, Row} from "react-bootstrap";
import FacultyQuestionBox from "./FacultyQuestionBox/FacultyQuestionBox";
import "./FacultyQuestionPaperPage.css"
import plusSign from "../../images/Group 27.svg";
import {FacultyQuestionContext} from "./FacultyQuestionContext"
import {v4 as uuid} from "uuid";

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
            <Row className={"examDetails"}>
                <Col style={{textAlign: "center"}}>
                    <input
                        className={"quizDataInput"}
                        placeholder={"Exam Name"}
                        type={"text"}
                        onChange={handleExamNameChange}
                        value={examName}/>
                </Col>
                <Col style={{textAlign: "center"}}>
                    <input
                        onChange={handleDurationChange}
                        className={"quizDataInput durationBox"}
                        placeholder={"Duration(Mins)"}
                        type={"number"}
                        min={"1"}
                        value={examDuration}/>
                </Col>
                <Col style={{textAlign: "center"}}>
                    <p>Date</p>
                    <input
                        onChange={handleDateChange}
                        id={"examDate"}
                        className={"quizDataInput"}
                        placeholder={"Exam Date"}
                        type={"date"}
                        value={examDate}/>
                </Col>
                <Col style={{textAlign: "center", display: "inline"}}>
                    <p>Start Time</p>
                    <input
                        onChange={handleStartTimeChange}
                        className={"quizDataInput"}
                        placeholder={"Exam Start Timing"}
                        type={"time"}
                        value={examStartTime}/>
                </Col>
                <Col style={{textAlign: "center", display: "inline-block"}}>
                    <p>End Time</p>
                    <input
                        onChange={handleEndTimeChange}
                        id={"endTime"}
                        className={"quizDataInput"}
                        placeholder={"Exam End Timing"}
                        type={"time"}
                        value={examEndTime}/>
                </Col>
            </Row>
            <Row>
                <Col style={{textAlign: "center"}}>
                    <p className={"ExamHeading"}>{examName} Exam</p>
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
