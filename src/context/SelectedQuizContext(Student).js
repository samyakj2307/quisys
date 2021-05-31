import React, { createContext, useState } from "react";

export const SelectedQuizContext = createContext();

export function SelectedQuizContextProvider(props) {
  const [currentQuizDetails, setCurrentQuizDetails] = useState({});

  return (
    <SelectedQuizContext.Provider
      value={[currentQuizDetails, setCurrentQuizDetails]}
    >
      {props.children}
    </SelectedQuizContext.Provider>
  );
}
