import React from 'react';
import './QuestionBox.css';
const Question = (props) => {
    return(<div class="QnBox"><h1>{props.question}</h1></div>);
}

export default Question;