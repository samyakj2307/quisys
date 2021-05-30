import React, {createContext, useState} from "react";

export const FacultyQuizContext = createContext();

export function FacultyQuizContextProvider(props) {
    const [quizDetails, setQuizDetails] = useState()


    return <FacultyQuizContext.Provider value={[quizDetails, setQuizDetails]}>
        {props.children}
    </FacultyQuizContext.Provider>

}