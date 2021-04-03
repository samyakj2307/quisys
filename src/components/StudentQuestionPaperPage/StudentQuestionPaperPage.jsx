import React, {useContext, useState,useEffect} from 'react';
import './StudentQuestionPaperPage.css';
import Question from './QuestionBox/QuestionBox';
import AnswerBox from "./AnswerBox/AnswerBox";
import {Col, Container, Row} from "react-bootstrap";
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
        <Container fluid={"md"}>
            <Row>
                <img src={quisysLogo}/>
            </Row>
            <Row>
                <Col>
                    {questionArray.map(number => {
                        return (
                            <button key={number} id={number} className={"questionNumbers"} onClick={goToQuestion}>
                                {number}
                            </button>
                        )
                    })}
                </Col>

                <Col className="Content">

                    <Row>
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
