import React, {createContext, useState} from "react";

export const ExamStudentListContext = createContext();

export function ExamStudentListContextProvider(props) {
    const [examStudentDetails, setExamStudentDetails] = useState([])

    return <ExamStudentListContext.Provider value={[examStudentDetails, setExamStudentDetails]}>
        {props.children}
    </ExamStudentListContext.Provider>
}