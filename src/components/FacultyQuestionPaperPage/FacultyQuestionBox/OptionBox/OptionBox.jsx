import React, {useContext} from "react";
import "./OptionBox.css"
import Option from "./Option/Option";
import plusSign from "../../../../images/Group 27.svg"
import {FacultyQuestionContext} from "../../../../context/FacultyQuestionContext";


function OptionBox(props) {
    const [questions, setQuestions] = useContext(FacultyQuestionContext);
    const propQno = props.id;
    const currentQuestion = questions[propQno];
    let currentOptions = questions[propQno].options;

    const [options, setOptions] = React.useState(currentOptions);


    function addOption() {
        setOptions(prevState => {
            return [...prevState, ""]
        })
        setQuestions((prevState) => {
            currentOptions = [...currentOptions, ""]
            currentQuestion["options"] = currentOptions;
            prevState[propQno] = currentQuestion;
            return prevState;
        })
    }

    function handleOptionDelete(id) {
        setOptions(prevOptions => {
            return prevOptions.filter((optionItem, index) => {
                return index !== id;
            });
        });
        // TODO Delete Option From Main Context Array;
    }


    return (
        <div>
            {
                options.map((currentOption, index) => {
                    return (
                        <Option
                            key={index}
                            qNo={propQno}
                            id={index}
                            // onChange={handleOptionsChange}
                            onDelete={handleOptionDelete}
                            value={currentOption}
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