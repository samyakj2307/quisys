import React, {useContext} from "react";
import "./OptionBox.css"
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
        setOptions([...options,{id: tempID, value: ""}])
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
        <div>
            {
                options.map((currentOption, index) => {
                    return (
                        <Option
                            key={currentOption.id}
                            qNo={propQno}
                            id={currentOption.id}
                            index={index}
                            onDelete={handleOptionDelete}
                            value={currentOption.value}
                        />
                    )
                })
            }
            <button onClick={addOption} className={" addButton addOptionButton"}><img src={plusSign}
                                                                                      alt={"Add Option"}/></button>
        </div>
    )
}


export default OptionBox;