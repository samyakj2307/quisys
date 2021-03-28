import React from "react";
import {FormControlLabel, RadioGroup, TextareaAutosize, Typography} from '@material-ui/core';
import "./FacultyQuestionBox.css"
import StyledRadioButton from "./StyledRadioButton";
import {createStyles} from "@material-ui/core/styles";

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


function FacultyQuestionBox() {

    const [question, setQuestion] = React.useState("");

    function questionValueChange(event) {
        const questionValue = event.target.value;
        setQuestion(questionValue);
    }

    return (
        <div className={"mainContainerQuestionBox"}>
            <TextareaAutosize
                className={"questionTextBox"}
                rowsMin={2}
                placeholder={"Question"}
                onChange={questionValueChange}
                value={question}/>
            <div className={"radioButtonContainer"}>
                <RadioGroup aria-label="Type of Answer" row={true}>
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
            </div>
        </div>
    )

}

export default FacultyQuestionBox;
