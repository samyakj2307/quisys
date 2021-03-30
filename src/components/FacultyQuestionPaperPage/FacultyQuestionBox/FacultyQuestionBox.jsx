import React, {useState} from "react";
import {FormControlLabel, RadioGroup, TextareaAutosize, Typography} from '@material-ui/core';
import "./FacultyQuestionBox.css"
import StyledRadioButton from "./StyledRadioButton";
import {createStyles} from "@material-ui/core/styles";
import {Col, Container, Row} from "react-bootstrap";
import "../../../QuestionPaper";
import minusButton from "../../../images/minus.svg"


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
    const propQno = props.id;
    const propQuestion = props.myQuestion;

    const [currentQuestion, setCurrentQuestion] = React.useState({
        question: "",
        options: "",
        ansMode: ""
    });


    function handleCurrentQuestionChange(event) {
        const {name, value} = event.target;
        setCurrentQuestion((prevQuestion) => {
            return {
                ...prevQuestion,
                [name]: value,
            };
        });
        props.onChange(currentQuestion, propQno);

    }

    function deleteQuestion() {
        props.onDelete(propQno);
    }

    return (
        <Container className={"mainContainerQuestionBox"}>
            <Row>
                <Col>
                    <button onClick={deleteQuestion} className={"deleteQuestion"}><img src={minusButton}/></button>
                </Col>
            </Row>
            <Row>
                <Col>
                    <TextareaAutosize
                        name={"question"}
                        className={"questionTextBox"}
                        rowsMin={2}
                        placeholder={"Question"}
                        onChange={handleCurrentQuestionChange}
                        value={currentQuestion.question}/>
                </Col>
            </Row>
            <Row className={"radioButtonContainer"}>
                <RadioGroup aria-label="Type of Answer" row={true}>
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
        </Container>

    )

}

export default FacultyQuestionBox;
