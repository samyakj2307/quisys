import React, {useContext, useState} from 'react';
import './AnswerBox.css';
import {Col} from "react-bootstrap";
import {FormControlLabel, RadioGroup, TextareaAutosize, Typography} from "@material-ui/core";
import {createStyles} from "@material-ui/core/styles";
import StyledOptionRadioButton from "./StyledOptionRadioButton";
import {StudentQuestionAnswerContext} from "../../../context/StudentQuestionAnswerContext";

const styles = createStyles({
    formControlLabel: {
        fontFamily: "Montserrat",
        fontSize: '15px',
        fontStyle: "normal",
        fontWeight: "normal",
        lineHeight: "18px",
        color: "#000000",
        '& label': {fontSize: '0.6rem'}
    }
});


function Answer(props) {

    const [questionAnswer, setQuestionAnswer] = useContext(StudentQuestionAnswerContext);
    const [textAnswer, setTextAnswer] = useState(questionAnswer[props.questionNo].textAnswer);


    function changeOptionValue(event) {
        const value = event.target.value;
        setQuestionAnswer((prevState) => {
            prevState[props.questionNo].optionSelected = value;
            return prevState;
        })

    }

    function renderOptions() {
        return (
            <RadioGroup aria-label="Type of Answer" className={"OptionsContainer"} onChange={changeOptionValue}>
                {props.options.map((option, index) => {
                    return (
                        <Col key={index}>
                            <FormControlLabel
                                className={"Options"}
                                id={index}
                                value={option}
                                control={<StyledOptionRadioButton/>}
                                label={<Typography style={styles.formControlLabel}>{option}</Typography>}/>
                        </Col>
                    )

                })}

            </RadioGroup>
        )

    }

    function handleTextChange(event) {
        const value = event.target.value;
        setTextAnswer(value);
        setQuestionAnswer((prevState) => {
            prevState[props.questionNo].textAnswer = value;
            return (prevState);
        });
    }

    function renderTextField() {
        return (
            <TextareaAutosize
                name={"textAnswer"}
                className={"answerTextBox"}
                rowsMin={3}
                onChange={handleTextChange}
                placeholder={"Write your Answer Here."}
                value={textAnswer}/>
        )

    }

    return (
        <div>
            {props.isTextField ? renderTextField() : renderOptions()}
        </div>);

}

export default Answer;
