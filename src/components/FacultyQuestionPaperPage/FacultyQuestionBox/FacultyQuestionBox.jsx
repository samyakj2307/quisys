import React from "react";
import {FormControlLabel, RadioGroup, TextareaAutosize, Typography} from '@material-ui/core';
import "./FacultyQuestionBox.css"
import StyledRadioButton from "./StyledRadioButton";
import {createStyles} from "@material-ui/core/styles";
import {Col, Container, Row} from "react-bootstrap";
import "../../../QuestionPaper";
import minusButton from "../../../images/minus.svg"
import plusSign from "../../../images/Group 27.svg";


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
        textAnswer: "",
        options: "",
        ansMode: ""
    });

    const [isText,setIsText] = React.useState(false);


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

    function handleRadio(event){
        const radioValue = event.target.value;
        console.log(radioValue);
        if(radioValue==="Text"){
            setIsText(true);
        }else {
            setIsText(false)
        }
    }

    function renderAnswerBox(){
        return (
            <TextareaAutosize
                name={"textAnswer"}
                className={"answerTextBox"}
                rowsMin={3}
                placeholder={"Answer (Optional)"}/>
        )
    }

    function renderOptions(){
        return (
            <TextareaAutosize
                name={"option1"}
                className={"optionsTextBox"}
                rowsMin={1}
                placeholder={"Option 1"}/>
        )
    }

    return (
        <Container className={"mainContainerQuestionBox"}>
            <Row>
                <Col>
                    <button onClick={deleteQuestion} className={"deleteQuestion"}><img src={minusButton} alt={"Delete Question"}/></button>
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
                <RadioGroup aria-label="Type of Answer" row={true} onChange={handleRadio} defaultValue={"Choice"}>
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
                    {isText ? renderAnswerBox() : renderOptions()}

                </Col>
                <Col md={6}>
                    <button className={"addOptionButton"}><img src={plusSign} alt={"Add Option"}/></button>
                </Col>
            </Row>
        </Container>

    )

}

export default FacultyQuestionBox;
