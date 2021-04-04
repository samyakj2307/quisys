import React, {useContext, useState} from 'react';
import Question from './QuestionBox/QuestionBox';
import AnswerBox from "./AnswerBox/AnswerBox";
import {Col, Container, Row} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./StudentQuestionPaperPage.css";
import {StudentQuestionAnswerContext} from "../../context/StudentQuestionAnswerContext";
import quisysLogo from "../../images/quisysLogo.png"

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
        <Container fluid={"md"} className={"PageContainer"}>
            <Row className={"NavBarContainer"}>
                <Col>
                    <img className={"quisysLogo"} src={quisysLogo}/>
                </Col>
                <Col>
                    <p className={"quizName"}>QUIZ-1</p>
                </Col>
                <Col>
                    <p className={"userDetails"}>Temp Student <br/> temp.student@vitstudent.ac.in</p>
                </Col>

            </Row>
            <Row className={"MainContainer"}>
                <Col md={3}>
                    {questionArray.map(number => {
                        return (

                            <button key={number} id={number} className={"questionNumbers"} onClick={goToQuestion}>
                                {number}
                            </button>

                        )
                    })}
                </Col>

                <Col className="QuestionOptionContainer" md={9}>

                    <Row>
                        <h4>Question No- {currentQuestionNumber + 1}</h4>
                        <Question
                            question={questionAnswer[currentQuestionNumber].question}
                        />
                        <AnswerBox
                            questionNo={currentQuestionNumber}
                            options={questionAnswer[currentQuestionNumber].options}
                            isTextField={questionAnswer[currentQuestionNumber].isText}
                        />
                    </Row>
                    <Row className={"ButtonContainer"}>
                        <Col>
                            <button onClick={handlePrevious} id={"previous"}>Previous</button>
                            <button onClick={handleNext} id={"next"}>Next</button>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );

}

export default StudentQuestionPaperPage;
