import React, {createContext, useState} from "react";
import {v4 as uuid} from "uuid";

export const FacultyQuestionContext = createContext();

export function QuestionProvider(props) {
    const TempID = uuid();
    const optionID = uuid();
    const [questions, setQuestions] = useState([]);

    return <FacultyQuestionContext.Provider value={[questions, setQuestions]}>
        {props.children}
    </FacultyQuestionContext.Provider>

}