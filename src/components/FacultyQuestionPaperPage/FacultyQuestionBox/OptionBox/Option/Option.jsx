import React, {useContext} from "react";
import {TextareaAutosize} from "@material-ui/core";
import "./Option.css"
import minusSign from "../../../../../images/minusOption.svg";
import {FacultyQuestionContext} from "../../../../../context/FacultyQuestionContext";

function Option(props) {
    const [questions, setQuestions] = useContext(FacultyQuestionContext);
    const propQno = props.qNo;
    const propOptionNo = props.id;
    const currentOptionValue = questions[propQno].options[propOptionNo];


    const [currentValue, setCurrentValue] = React.useState(currentOptionValue);

    function handleChange(event) {
        const value = event.target.value;
        setCurrentValue(value);
        setQuestions((prevQuestions) => {
            prevQuestions[propQno].options[propOptionNo] = value;
            return (prevQuestions);
        });

    }

    function removeOption() {
        props.onDelete(propOptionNo);
    }

    return (
        <div className={"optionContainer"}>
            <TextareaAutosize
                className={"optionsTextBox"}
                rowsMin={1}
                placeholder={"Option " + (props.id + 1)}
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