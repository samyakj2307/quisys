import React, {useContext, useState} from 'react';
import './StudentQuestionPaperPage.css';
import Question from './QuestionBox/QuestionBox';
import AnswerBox from "./AnswerBox/AnswerBox";
import {Col, Container, Row} from "react-bootstrap";
import {StudentQuestionAnswerContext} from "../../context/StudentQuestionAnswerContext";

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
        <Container className="Content">
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
            </Row>
            <Row>
                <Col className={"QuestionAnswerContainer"}>
                    <Question
                        question={questionAnswer[currentQuestionNumber].question}
                    />
                    <AnswerBox
                        questionNo={currentQuestionNumber}
                        options={questionAnswer[currentQuestionNumber].options}
                        isTextField={questionAnswer[currentQuestionNumber].isText}
                    />
                </Col>
                <Col>
                    <button onClick={handlePrevious} className="NextStep">Previous</button>
                    <button onClick={handleNext} className="NextStep">Next</button>
                </Col>
            </Row>
        </Container>
    );

}

export default StudentQuestionPaperPage;