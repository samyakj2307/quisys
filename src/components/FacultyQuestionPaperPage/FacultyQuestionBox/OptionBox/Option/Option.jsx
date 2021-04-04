import React, {useContext} from "react";
import {TextareaAutosize} from "@material-ui/core";
import "./Option.css"
import minusSign from "../../../../../images/minusOption.svg";
import {FacultyQuestionContext} from "../../../../../context/FacultyQuestionContext";

function Option(props) {
    const qNo = props.qNo;
    const ID = props.id;
    const optionIndex = props.index;
    const [questions, setQuestions] = useContext(FacultyQuestionContext);


    //Setting initial value of options as Same as Value in Context;
    const [currentValue, setCurrentValue] = React.useState(questions[qNo].value.options[optionIndex].value);

    function handleChange(event) {
        const value = event.target.value;
        setCurrentValue(value);
        setQuestions((prevQuestions) => {
            prevQuestions[qNo].value.options[optionIndex].value = value;
            return (prevQuestions);
        });

    }

    function removeOption() {
        props.onDelete(ID);
    }

    return (
        <div className={"optionContainer"}>
            <TextareaAutosize
                className={"optionsTextBox"}
                rowsMin={1}
                placeholder={"Option " + (optionIndex + 1)}
                value={currentValue}
                onChange={handleChange}
            />
            <button
                onClick={removeOption}
                className={" addButton removeOptionButton"}>
                <img src={minusSign} alt={"Remove Option"}/>
            </button>
        </div>
    )
}

export default Option;