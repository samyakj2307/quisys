import React, {useContext, useState} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./StudentQuestionPaperPage.css";
import {StudentQuestionAnswerContext} from "../../context/StudentQuestionAnswerContext";
import quisysLogo from "../../images/quisysLogo.png"
import Answer from "./AnswerBox/AnswerBox";
import Question from "./QuestionBox/QuestionBox";

function StudentQuestionPaperPage() {

    const [questionAnswer, setQuestionAnswer] = useContext(StudentQuestionAnswerContext);
    const [currentQuestionNumber, setCurrentQuestionNumber] = useState(0);

    const questionArray = Array.from({length: questionAnswer.length}, (_, index) => index + 1);

    function handleNext() {
        if (currentQuestionNumber < (questionAnswer.length - 1)) {
            setCurrentQuestionNumber(prevState => {
                return (prevState + 1);
            })
        }
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
        <div className={"PageContainer"}>
            <Row className={"NavBarContainer"}>
                <Col style={{textAlign: "left"}}>
                    <img className={"quisysLogo"} src={quisysLogo}/>
                </Col>
                <Col style={{textAlign: "center"}}>
                    <p className={"quizName"}>QUIZ-1</p>
                </Col>
                <Col style={{textAlign: "right"}}>
                    <p className={"userDetails"}>Temp Student <br/> temp.student@vitstudent.ac.in</p>
                </Col>

            </Row>
            <Row className={"MainContainer"}>
                <Col md={3} className={"TimerQuestionNumber"}>
                    <Row>
                        <Col>
                            <h4>TIMER SECTION</h4>
                        </Col>
                    </Row>
                    <Row className={"questionNumbersContainer"}>
                        <Col style={{textAlign: "left"}}>{questionArray.map(number => {
                                return (<button
                                        key={number}
                                        id={number}
                                        className={"questionNumbers"}
                                        onClick={goToQuestion}>
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
                            <Question
                                question={questionAnswer[currentQuestionNumber].question}
                            />
                            <Answer
                                questionNo={currentQuestionNumber}
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
                                    <button onClick={handleNext} id={"next"}>Next</button>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    );

}

export default StudentQuestionPaperPage;
