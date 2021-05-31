import React, { createContext, useState } from "react";

export const StudentQuestionAnswerContext = createContext();

export function QuestionAnswerProvider(props) {
  const [questionAnswer, setQuestionAnswer] = useState([]);

  return (
    <StudentQuestionAnswerContext.Provider
      value={[questionAnswer, setQuestionAnswer]}
    >
      {props.children}
    </StudentQuestionAnswerContext.Provider>
  );
}
