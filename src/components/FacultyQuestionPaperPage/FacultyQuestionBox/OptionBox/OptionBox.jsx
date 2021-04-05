import React, {useContext} from "react";
import "./OptionBox.css"
import {Col, Container, Row} from "react-bootstrap"
import Option from "./Option/Option";
import plusSign from "../../../../images/Group 27.svg"
import {FacultyQuestionContext} from "../../../../context/FacultyQuestionContext";
import {uuid} from "uuidv4";


function OptionBox(props) {
    const [questions, setQuestions] = useContext(FacultyQuestionContext);
    const propQno = props.index;
    const currentQuestion = questions[propQno].value;
    let currentOptions = currentQuestion.options;

    const [options, setOptions] = React.useState(currentOptions);


    function addOption() {
        const tempID = uuid();
        setQuestions((prevQuestion) => {
            let tempOptions = [...currentOptions, {id: tempID, value: ""}]
            currentQuestion.options = tempOptions;
            prevQuestion[propQno].value = currentQuestion;
            return prevQuestion;
        });
        setOptions([...options, {id: tempID, value: ""}])
    }

    function handleOptionDelete(id) {

        setQuestions(prevQuestions => {
            prevQuestions[propQno].value.options = prevQuestions[propQno].value.options.filter((optionItem, index) => {
                return optionItem.id !== id;
            });
            return prevQuestions;

        });

        setOptions(prevOptions => {
            return prevOptions.filter((optionItem, index) => {
                return optionItem.id !== id;
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
                                            key={currentOption.id}
                                            qNo={propQno}
                                            id={currentOption.id}
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
                <Col style={{marginLeft:"70px"}}>
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