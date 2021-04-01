import React, {useContext, useState} from "react";
import {TextareaAutosize} from "@material-ui/core";
import {QuestionContext} from "../../../../context/QuestionContext"


function TextBox(props) {
    const [questions, setQuestions] = useContext(QuestionContext);
    const propQno = props.id;
    const currentQuestion = questions[propQno];

    const [textAnswer, setTextAnswer] = useState(currentQuestion.textAnswer);

    function handleTextChange(event) {
        const value = event.target.value;
        setTextAnswer(value);
        setQuestions((prevQuestions) => {
            prevQuestions[propQno].textAnswer = value;
            return (prevQuestions);
        });
    }

    return (
        <TextareaAutosize
            name={"textAnswer"}
            className={"answerTextBox"}
            rowsMin={3}
            onChange={handleTextChange}
            placeholder={"Answer (Optional)"}
            value={textAnswer}/>
    )
}

export default TextBox;
