import React, {useContext, useState} from "react";
import {FormControlLabel, RadioGroup, TextareaAutosize, Typography} from '@material-ui/core';
import "./FacultyQuestionBox.css"
import StyledRadioButton from "./StyledRadioButton";
import {createStyles} from "@material-ui/core/styles";
import {Col, Container, Row} from "react-bootstrap";
import minusButton from "../../../images/minus.svg"
import OptionBox from "./OptionBox/OptionBox";
import {FacultyQuestionContext} from "../FacultyQuestionContext"
import TextBox from "./TextBox/TextBox";


const styles = createStyles({
    formControlLabel: {
        fontFamily: "Montserrat",
        fontSize: '30px',
        fontStyle: "normal",
        fontWeight: "medium",
        lineHeight: "37px",
        color: "#000000",
        '& label': {fontSize: '0.6rem'}
    }
});


function FacultyQuestionBox(props) {
    const [questions, setQuestions] = useContext(FacultyQuestionContext);
    // const Id = props.id;
    const qNo = props.index;
    const currentQuestion = questions[qNo];

    const [isText, setIsText] = useState(currentQuestion.isText);
    const [questionText, setQuestionText] = useState(currentQuestion.question);


    function handleCurrentQuestionChange(event) {
        const value = event.target.value;
        setQuestionText(value);
        setQuestions((prevQuestions) => {
            prevQuestions[props.index].question = value;
            return (prevQuestions)
        })

    }

    function deleteQuestion() {
        setQuestions(prevQuestions => {
            return prevQuestions.filter((questionItem) => {
                return questionItem.questionId !== props.id;
            });
        });
    }

    function handleRadio(event) {
        const radioValue = event.target.value;
        let bool;
        if (radioValue === "Text") {
            bool = true;
        } else {
            bool = false;
        }
        setIsText(bool);
        setQuestions((prevQuestions) => {
            let question = prevQuestions[qNo];
            if (bool) {
                question.options = [];
            } else {
                question.textAnswer = "";
            }
            prevQuestions[qNo].isText = bool;
            return (prevQuestions);
        });
    }

    function renderTextBox() {
        return (<TextBox
            key={props.index}
            index={props.index}/>)
    }

    function renderOptions() {
        return (
            <div>
                <OptionBox
                    key={props.index}
                    index={props.index}/>
                <br/>
            </div>
        )
    }

    return (
        <Container className={"mainContainerQuestionBox"}>
            <Row>
                <Col>
                    <button onClick={deleteQuestion}
                            className={"deleteQuestion"}>
                        <img src={minusButton} alt={"Delete Question"}/>
                    </button>
                </Col>
            </Row>
            <Row>
                <Col>
                    <TextareaAutosize
                        name={"question"}
                        className={"questionTextBox"}
                        rowsMin={2}
                        placeholder={"Question " + (qNo + 1)}
                        onChange={handleCurrentQuestionChange}
                        value={questionText}
                    />
                </Col>
            </Row>
            <Row>
                <Col className={"radioButtonContainer"}>
                    <RadioGroup aria-label="Type of Answer" row={true} onChange={handleRadio}
                                value={isText ? "Text" : "Choice"}>
                        <FormControlLabel
                            className={"typeOfAnswers"}
                            id={"choice"}
                            value="Choice"
                            control={<StyledRadioButton/>}
                            label={<Typography style={styles.formControlLabel}>Choice</Typography>}/>
                        <FormControlLabel
                            className={"typeOfAnswers"}
                            id={"text"}
                            value="Text"
                            control={<StyledRadioButton/>}
                            label={<Typography style={styles.formControlLabel}>Text</Typography>}/>
                    </RadioGroup>
                </Col>
            </Row>
            <Row>
                <Col className={"answerBoxContainer"}>
                    {isText ? renderTextBox() : renderOptions()}
                </Col>
            </Row>
        </Container>

    )

}

export default FacultyQuestionBox;
