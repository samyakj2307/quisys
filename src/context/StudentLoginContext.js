import React, {useState, createContext} from "react";

export const StudentLoginContext = createContext();

export function StudentLoginDataProvider(props) {
    const [studentIsLoggedIn, setStudentIsLoggedIn] = useState(false);

    return <StudentLoginContext.Provider value={[studentIsLoggedIn, setStudentIsLoggedIn]}>
        {props.children}
    </StudentLoginContext.Provider>

}