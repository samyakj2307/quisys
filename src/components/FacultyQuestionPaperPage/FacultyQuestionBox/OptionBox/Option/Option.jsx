import React, {useContext} from "react";
import {TextareaAutosize} from "@material-ui/core";
import "./Option.css"
import minusSign from "../../../../../images/minusOption.svg";
import {FacultyQuestionContext} from "../../../FacultyQuestionContext";
import {Col, Container, Row} from "react-bootstrap";

function Option(props) {
    const qNo = props.qNo;
    const ID = props.id;
    const optionIndex = props.index;
    const [questions, setQuestions] = useContext(FacultyQuestionContext);


    //Setting initial value of options as Same as Value in Context;
    const [currentValue, setCurrentValue] = React.useState(questions[qNo].options[optionIndex].value);

    function handleChange(event) {
        const value = event.target.value;
        setCurrentValue(value);
        setQuestions((prevQuestions) => {
            prevQuestions[qNo].options[optionIndex].value = value;
            return (prevQuestions);
        });

    }

    function removeOption() {
        props.onDelete(ID);
    }

    return (
        <Container className={"optionContainer"}>
            <Row style={{width:"fit-content", marginLeft: "40px"}}>
                <Col>
                    <button
                        onClick={removeOption}
                        className={" addButton removeOptionButton"}>
                        <img src={minusSign} alt={"Remove Option"}/>
                    </button>
                    <TextareaAutosize
                        className={"optionsTextBox"}
                        rowsMin={1}
                        placeholder={"Option " + (optionIndex + 1)}
                        value={currentValue}
                        onChange={handleChange}
                    />
                </Col>
            </Row>
        </Container>
    )
}

export default Option;