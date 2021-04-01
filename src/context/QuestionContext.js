import React, {useState, createContext} from "react";

export const QuestionContext = createContext();

export function QuestionProvider(props) {
    const [questions, setQuestions] = useState([{
        question: "",
        isText: false,
        textAnswer: "",
        options: []
    }
    ])

    return <QuestionContext.Provider value={[questions, setQuestions]}>
        {props.children}
    </QuestionContext.Provider>

}