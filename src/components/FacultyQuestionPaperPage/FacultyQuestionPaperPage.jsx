import React, {useContext, useState} from "react";
import {Col, Container, Row} from "react-bootstrap";
import FacultyQuestionBox from "./FacultyQuestionBox/FacultyQuestionBox";
import "./FacultyQuestionPaperPage.css"
import plusSign from "../../images/Group 27.svg";
import {FacultyQuestionContext} from "../../context/FacultyQuestionContext"
import {uuid} from "uuidv4";

function FacultyQuestionPaperPage() {
    // Imported Questions List from FacultyQuestionContext.js
    const [questions, setQuestions] = useContext(FacultyQuestionContext);
    const [examName, setExamName] = useState("");

    // Adding Questions
    function addQuestionBox() {
        const TempID = uuid();
        setQuestions((prevState) => {
            const optionID = uuid();
            return [...prevState, {
                id: TempID,
                value: {
                    question: "",
                    isText: false,
                    textAnswer: "",
                    options: [{id: optionID, value: ""}]
                }
            }]
        })
    }

    function handleExamNameChange(event){
        const value = event.target.value;
        setExamName(value);

    }

    return (
        <Container className={"mainQuestionContainer"}>
            <Row className={"examDetails"}>
                <Col>
                    <input className={"quizDataInput"} placeholder={"Exam Name"} type={"text"} onChange={handleExamNameChange} value={examName}/>
                    <input className={"quizDataInput durationBox"} placeholder={"Duration(Mins)"} type={"number"} min={"1"}/>

                    <label>Date <input className={"quizDataInput"} placeholder={"Exam Date"} type={"date"}/>
                    </label>
                    <label>Start Time
                    <input className={"quizDataInput"} placeholder={"Exam Start Timing"} type={"time"}/>
                    </label>
                    <label>End Time
                    <input className={"quizDataInput"} placeholder={"Exam End Timing"} type={"time"}/>
                    </label>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p className={"ExamHeading"}>{examName} Exam</p>
                </Col>
            </Row>

            <Row className={"facultyQuestionBoxContainer"}>
                {
                    questions.map((questionItem, qno) => {
                        return (<FacultyQuestionBox
                            key={questionItem.id}
                            id={questionItem.id}
                            index={qno}
                        />)
                    })
                }
            </Row>
            <Row>
                <button
                    className={"facultyAddButton addButton"}
                    onClick={addQuestionBox}><img src={plusSign} alt={"Add Question"}/></button>
            </Row>
        </Container>
    )
}

export default FacultyQuestionPaperPage
