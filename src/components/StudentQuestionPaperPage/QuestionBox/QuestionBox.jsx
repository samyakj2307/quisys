import React from 'react';
import './QuestionBox.css';

const Question = (props) => {
    return (
        <div className={"questionContainer"}>
            {props.question}
        </div>
    )
}

export default Question;