import React from "react";
import FacultyQuestionBox from "./FacultyQuestionBox/FacultyQuestionBox";
import "./FacultyQuestionPaperPage.css"
import questionArray from "../../QuestionPaper";
import plusSign from "../../images/Group 27.svg";

function FacultyQuestionPaperPage() {

    const [questions, setQuestions] = React.useState(questionArray)

    function handleChange(newValue, index) {
        return (setQuestions((prevQuestionArrayValue) => {
                prevQuestionArrayValue[index] = newValue;
                return prevQuestionArrayValue;
            })
        )
    }

    function addQuestionBox() {
        setQuestions(prevState => {
                return [
                    ...prevState,
                    {
                        question: "",
                        options: "",
                        ansMode: ""
                    }
                ]
            }
        )
    }

    function deleteCurrentQuestion(id) {
        setQuestions(prevQuestions => {
            return prevQuestions.filter((noteItem, index) => {
                return index !== id;
            });
        });
    }

    return (
        <div className={"mainQuestionContainer"}>
            <div className={"facultyQuestionBoxContainer"}>
                {
                    questions.map((questionItem, qno) => {
                        return (
                            <FacultyQuestionBox
                                key={qno}
                                id={qno}
                                myQuestion={questionItem}
                                onChange={handleChange}
                                onDelete={deleteCurrentQuestion}/>)
                    })
                }
            </div>
            <button
                className={"addQuestionButton"}
                onClick={addQuestionBox}><img src={plusSign} alt={"Add Question"}/></button>
        </div>
    )
}

export default FacultyQuestionPaperPage
