import React, {useState, createContext} from "react";

export const FacultyLoginContext = createContext();

export function FacultyLoginDataProvider(props) {
    const [facultyIsLoggedIn, setFacultyIsLoggedIn] = useState(false)

    return <FacultyLoginContext.Provider value={[facultyIsLoggedIn, setFacultyIsLoggedIn]}>
        {props.children}
    </FacultyLoginContext.Provider>

}