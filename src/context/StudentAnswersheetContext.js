import React, {createContext, useState} from "react";

export const StudentAnswersheetContext = createContext();

export function StudentAnswersheetContextProvider(props) {
    const [studentAnswerSheet, setStudentAnswerSheet] = useState({});


    return <StudentAnswersheetContext.Provider value={[studentAnswerSheet, setStudentAnswerSheet]}>
        {props.children}
    </StudentAnswersheetContext.Provider>

}