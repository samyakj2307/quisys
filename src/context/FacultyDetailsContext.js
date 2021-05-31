import React, { createContext, useState } from "react";

export const FacultyDetailsContext = createContext();

export function FacultyDetailsContextProvider(props) {
  const [currentFacultyDetails, setCurrentFacultyDetails] = useState({});

  return (
    <FacultyDetailsContext.Provider
      value={[currentFacultyDetails, setCurrentFacultyDetails]}
    >
      {props.children}
    </FacultyDetailsContext.Provider>
  );
}
