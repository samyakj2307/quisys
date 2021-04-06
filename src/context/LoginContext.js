import React, {createContext, useState} from "react";

export const LoginContext = createContext();

export function LoginDataProvider(props) {
    //TODO Change both of these to False;;
    const [facultyIsLoggedIn, setFacultyIsLoggedIn] = useState(false);
    const [studentIsLoggedIn, setStudentIsLoggedIn] = useState(false);

    return <LoginContext.Provider
        value={
            {
                Faculty: [facultyIsLoggedIn, setFacultyIsLoggedIn],
                Student: [studentIsLoggedIn, setStudentIsLoggedIn]
            }
        }>
        {props.children}
    </LoginContext.Provider>

}