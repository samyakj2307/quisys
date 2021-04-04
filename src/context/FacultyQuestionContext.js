import React, {createContext, useState} from "react";

export const FacultyQuestionContext = createContext();

export function QuestionProvider(props) {
    const [questions, setQuestions] = useState([
        {
            id: "4c7cccb1-5f87-4bsd-ae73-cf73dfc6e04`f",
            value: {
                question: "",
                isText: false,
                textAnswer: "",
                options: [{id: "4c7cccb1-5f87-4bba-ae73-cf73dfc6e04`f", value: "Mrigank"}]
            }
        }
    ]);

    return <FacultyQuestionContext.Provider value={[questions, setQuestions]}>
        {props.children}
    </FacultyQuestionContext.Provider>

}