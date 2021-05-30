import React, {createContext, useState} from "react";

export const SelectedClassContext = createContext();

export function SelectedClassContextProvider(props) {
    const [selectedClass, setSelectedClass] = useState({
        id: "",
        className: ""
    })


    return <SelectedClassContext.Provider value={[selectedClass, setSelectedClass]}>
        {props.children}
    </SelectedClassContext.Provider>

}