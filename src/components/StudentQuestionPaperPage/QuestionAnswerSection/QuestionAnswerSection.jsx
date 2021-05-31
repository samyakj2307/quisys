import React, {useContext, useState} from 'react';
import './QuestionAnswerSection.css';
import {FormControlLabel, RadioGroup, TextareaAutosize, Typography} from "@material-ui/core";
import {createStyles} from "@material-ui/core/styles";
import StyledOptionRadioButton from "./StyledOptionRadioButton";
import {StudentQuestionAnswerContext} from "../../../context/StudentQuestionAnswerContext";
import {StudentAnswersheetContext} from "../../../context/StudentAnswersheetContext";
import Options from "./Options";

const styles = createStyles({
    formControlLabel: {
        fontFamily: "Montserrat",
        fontSize: '15px',
        fontStyle: "normal",
        textAlign: "justify",
        fontWeight: "normal",
        lineHeight: "18px",
        color: "#000000",
        '& label': {fontSize: '0.6rem'}
    }
});


function QuestionAnswerSection(props) {


    //Only Questions
    const [questionAnswer, setQuestionAnswer] = useContext(StudentQuestionAnswerContext);

    const [studentAnswerSheet, setStudentAnswerSheet] = useContext(StudentAnswersheetContext);

    const [textAnswer, setTextAnswer] = useState(questionAnswer[props.questionNo].textAnswer);


    function changeOptionValue(event) {
        const value = event.target.value;
        setQuestionAnswer((prevState) => {
            prevState[props.questionNo].selectedOption = value;
            console.log(prevState)
            //TODO Save Option Value
            return prevState;
        })

        setStudentAnswerSheet((prevState) => {
            prevState.studentAnswerSheet[props.questionNo].answered = value
            return prevState
        })

    }

    function renderOptions() {
        return (
            <RadioGroup aria-label="Type of Answer" className={"OptionsContainer"} onChange={changeOptionValue}
                        value={questionAnswer[props.questionNo].selectedOption}>
                {props.options.map((option, index) => {
                    return (
                        <Options
                            key={index}
                            index={index}
                            optionValue={option.value}
                        />
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
        setStudentAnswerSheet((prevState) => {
            prevState.studentAnswerSheet[props.questionNo].answered = value
            return prevState
        })
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
            <div className={"questionContainer"}>
                {props.question}
            </div>
            {(props.isTextField) ? renderTextField() : renderOptions()}
        </div>);

}

export default QuestionAnswerSection;
