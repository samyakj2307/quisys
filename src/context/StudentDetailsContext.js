import React, {createContext, useState} from "react";

export const StudentDetailsContext = createContext();

export function StudentDetailsContextProvider(props) {
    const [currentStudentDetails, setCurrentStudentDetails] = useState({});


    return <StudentDetailsContext.Provider value={[currentStudentDetails, setCurrentStudentDetails]}>
        {props.children}
    </StudentDetailsContext.Provider>

}