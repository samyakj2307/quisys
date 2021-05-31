import React, { createContext, useState } from "react";

export const ClassListContext = createContext();

export function ClassListContextProvider(props) {
  const [classDetails, setClassDetails] = useState([]);

  return (
    <ClassListContext.Provider value={[classDetails, setClassDetails]}>
      {props.children}
    </ClassListContext.Provider>
  );
}
