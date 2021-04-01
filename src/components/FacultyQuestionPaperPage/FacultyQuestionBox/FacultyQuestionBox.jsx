import React, {useContext, useState} from "react";
import {FormControlLabel, RadioGroup, TextareaAutosize, Typography} from '@material-ui/core';
import "./FacultyQuestionBox.css"
import StyledRadioButton from "./StyledRadioButton";
import {createStyles} from "@material-ui/core/styles";
import {Col, Container, Row} from "react-bootstrap";
import minusButton from "../../../images/minus.svg"
import OptionBox from "./OptionBox/OptionBox";
import {FacultyQuestionContext} from "../../../context/FacultyQuestionContext"
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
    const propQno = props.id;
    const currentQuestion = questions[propQno];

    const [isText, setIsText] = useState(currentQuestion.isText);


    function handleCurrentQuestionChange(event) {
        currentQuestion.question = event.target.value;
        setQuestions((prevQuestions) => {
            prevQuestions[propQno] = currentQuestion;
            return (prevQuestions);
        });

    }

    function deleteQuestion() {
        setQuestions(prevQuestions => {
            return prevQuestions.filter((questionItem, index) => {
                return index !== propQno;
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
            if (bool) {
                prevQuestions[propQno].options = [];
            } else {
                prevQuestions[propQno].textAnswer = "";
            }
            prevQuestions[propQno].isText = bool;
            return (prevQuestions);
        });
    }

    function renderTextBox() {
        return (<TextBox id={propQno}/>)
    }

    function renderOptions() {
        return (
            <div>
                <OptionBox id={propQno}/>
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
                        placeholder={"Question "+(propQno+1)}
                        onChange={handleCurrentQuestionChange}
                    />
                </Col>
            </Row>
            <Row className={"radioButtonContainer"}>
                <RadioGroup aria-label="Type of Answer" row={true} onChange={handleRadio}
                            value={isText ? "Text" : "Choice"}>
                    <Col>
                        <FormControlLabel
                            className={"typeOfAnswers"}
                            id={"choice"}
                            value="Choice"
                            control={<StyledRadioButton/>}
                            label={<Typography style={styles.formControlLabel}>Choice</Typography>}/>
                    </Col>
                    <Col>
                        <FormControlLabel
                            className={"typeOfAnswers"}
                            id={"text"}
                            value="Text"
                            control={<StyledRadioButton/>}
                            label={<Typography style={styles.formControlLabel}>Text</Typography>}/>
                    </Col>
                </RadioGroup>
            </Row>
            <Row className={"answerBoxContainer"}>
                <Col md={6}>
                    {isText ? renderTextBox() : renderOptions()}
                </Col>
            </Row>
        </Container>

    )

}

export default FacultyQuestionBox;
