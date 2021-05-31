import React, {useContext, useState} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./StudentQuestionPaperPage.css";
import {StudentQuestionAnswerContext} from "../../context/StudentQuestionAnswerContext";
import quisysLogo from "../../images/quisysLogo.png"
import QuestionAnswerSection from "./QuestionAnswerSection/QuestionAnswerSection";
import {StudentDetailsContext} from "../../context/StudentDetailsContext";
import {SelectedQuizContext} from "../../context/SelectedQuizContext(Student)";
import {StudentAnswersheetContext} from "../../context/StudentAnswersheetContext";
import {useHistory} from "react-router-dom";
import Timer from "./Timer/Timer";

const axios = require("axios").default;

const baseUrl = "http://localhost:3000";

function StudentQuestionPaperPage() {

    // Only Question Answers
    const [questionAnswer, setQuestionAnswer] = useContext(StudentQuestionAnswerContext);

    const [currentQuestionNumber, setCurrentQuestionNumber] = useState(0);

    // All Details about Current Quiz
    const [currentQuizDetails, setCurrentQuizDetails] = useContext(SelectedQuizContext)

    // Current Student Details
    const [currentStudentDetails, setCurrentStudentDetails] = useContext(StudentDetailsContext);

    const [studentAnswerSheet, setStudentAnswerSheet] = useContext(StudentAnswersheetContext);

    const questionArray = Array.from({length: questionAnswer.length}, (_, index) => index + 1);

    const history = useHistory();


    function handleNext() {
        if (currentQuestionNumber < (questionAnswer.length - 1)) {
            setCurrentQuestionNumber(prevState => {
                return (prevState + 1);
            })
        }
    }

    function handleSubmit() {
        axios
            .post(baseUrl + "/submitExam", studentAnswerSheet)
            .then(function (response) {
                console.log(response.data)
                history.push("/StudentHomePage");

            })
            .catch(function (error) {
                console.log(error);
            });
    }

    function handlePrevious() {
        if (currentQuestionNumber > 0) {
            setCurrentQuestionNumber(prevState => {
                return (prevState - 1);
            })
        }
    }

    function goToQuestion(event) {
        const value = event.target.id;
        let qNo = value - 1;
        setCurrentQuestionNumber(qNo)
    }


    return (
        <Container className={"PageContainer"}>
            <Row className={"NavBarContainer"}>
                <Col style={{textAlign: "left"}}>
                    <img className={"quisysLogo"} src={quisysLogo} alt={"quisys-logo"}/>
                </Col>
                <Col style={{textAlign: "center"}}>
                    <p className={"quizName"}>{currentQuizDetails.examName}</p>
                </Col>
                <Col style={{textAlign: "right"}}>
                    <p className={"userDetails"}>{currentStudentDetails.name}<br/>{currentStudentDetails.email}</p>
                </Col>

            </Row>
            <Row className={"MainContainer"}>
                <Col md={3} className={"TimerQuestionNumber"}>
                    <Row>
                        <Timer
                            handleSubmitAction={handleSubmit}/>
                    </Row>
                    <Row className={"questionNumbersContainer"}>
                        <Col style={{textAlign: "left"}}>{questionArray.map(number => {
                                return (<button
                                        key={number}
                                        id={number}
                                        className={"questionNumbers"}
                                        onClick={goToQuestion}
                                    >
                                        {number}
                                    </button>
                                )
                            }
                        )
                        }
                        </Col>
                    </Row>
                </Col>

                <Col className="QuestionOptionContainer" md={9}>

                    <Row>
                        <Col style={{textAlign: "left"}}>
                            <h4>Question No- {currentQuestionNumber + 1}</h4>
                            <QuestionAnswerSection
                                questionNo={currentQuestionNumber}
                                question={questionAnswer[currentQuestionNumber].question}
                                options={questionAnswer[currentQuestionNumber].options}
                                isTextField={questionAnswer[currentQuestionNumber].isText}
                            />
                        </Col>
                    </Row>
                    <Row className={"ButtonContainer"}>
                        <Col>
                            <Row>
                                <Col>
                                    <button onClick={handlePrevious}>Previous</button>
                                </Col>
                                <Col>
                                    {currentQuestionNumber !== (questionAnswer.length - 1) ?
                                        <button onClick={handleNext} id={"next"}>Save & Next</button> :
                                        <button onClick={handleSubmit} id={"next"}>Submit</button>
                                    }
                                    {/*TODO make a submit button at the end*/}
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );

}

export default StudentQuestionPaperPage;
