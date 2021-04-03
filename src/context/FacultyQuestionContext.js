import React, {useState, createContext} from "react";

export const FacultyQuestionContext = createContext();

export function QuestionProvider(props) {
    const [questions, setQuestions] = useState([{
        question: "",
        isText: false,
        textAnswer: "",
        options: []
    }
    ]);

    return <FacultyQuestionContext.Provider value={[questions, setQuestions]}>
        {props.children}
    </FacultyQuestionContext.Provider>

}