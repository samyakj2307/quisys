import React, {useContext} from "react";
import "./OptionBox.css"
import {Col, Container, Row} from "react-bootstrap"
import Option from "./Option/Option";
import plusSign from "../../../../images/Group 27.svg"
import {FacultyQuestionContext} from "../../FacultyQuestionContext";
import {uuid} from "uuidv4";


function OptionBox(props) {
    const [questions, setQuestions] = useContext(FacultyQuestionContext);
    const propQno = props.index;
    const currentQuestion = questions[propQno];
    let currentOptions = currentQuestion.options;

    const [options, setOptions] = React.useState(currentOptions);


    function addOption() {
        const tempID = uuid();
        setQuestions((prevQuestion) => {
            currentQuestion.options = [...currentOptions, {optionId: tempID, value: ""}];
            prevQuestion[propQno] = currentQuestion;
            return prevQuestion;
        });
        setOptions([...options, {optionId: tempID, value: ""}])
    }

    function handleOptionDelete(id) {

        setQuestions(prevQuestions => {
            prevQuestions[propQno].options = prevQuestions[propQno].options.filter((optionItem) => {
                return optionItem.optionId !== id;
            });
            return prevQuestions;

        });

        setOptions(prevOptions => {
            return prevOptions.filter((optionItem) => {
                return optionItem.optionId !== id;
            });
        });
    }


    return (
        <Container>
            <Row>
                <Col>
                    {
                        options.map((currentOption, index) => {
                            return (
                                <Row>
                                    <Col>
                                        <Option
                                            key={currentOption.optionId}
                                            qNo={propQno}
                                            id={currentOption.optionId}
                                            index={index}
                                            onDelete={handleOptionDelete}
                                            value={currentOption.value}
                                        />
                                    </Col>
                                </Row>
                            )
                        })
                    }
                </Col>
            </Row>
            <Row>
                <Col style={{marginLeft: "70px"}}>
                    <button
                        onClick={addOption}
                        className={" addButton addOptionButton"}>
                        <img
                            src={plusSign}
                            alt={"Add Option"}
                        />
                    </button>
                </Col>
            </Row>
        </Container>
    )
}


export default OptionBox;