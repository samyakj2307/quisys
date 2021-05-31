import React, { createContext, useState } from "react";

export const QuizListContext = createContext();

export function QuizListContextProvider(props) {
  const [quizDetails, setQuizDetails] = useState([]);

  return (
    <QuizListContext.Provider value={[quizDetails, setQuizDetails]}>
      {props.children}
    </QuizListContext.Provider>
  );
}
