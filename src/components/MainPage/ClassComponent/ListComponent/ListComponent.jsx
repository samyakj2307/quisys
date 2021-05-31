import React, { useContext } from "react";
import "./ListComponent.css";

import "bootstrap/dist/css/bootstrap.min.css";
import { QuizListContext } from "../../../../context/QuizListContext";
import ListRow from "./ListRow/ListRow";
import { Col } from "react-bootstrap";
import { FacultyQuestionContext } from "../../../FacultyQuestionPaperPage/FacultyQuestionContext";

function ListComponent(props) {
  const [quizDetails, setQuizDetails] = useContext(QuizListContext);
  // const [questions, setQuestions] = useContext(FacultyQuestionContext);

  return (
    <div className={"listComponentContainer"}>
      {quizDetails !== [] ? (
        quizDetails.map((questionItem, index) => {
          return (
            <ListRow
              key={index}
              index={index}
              examId={questionItem._id}
              examName={questionItem.examName}
              examDuration={questionItem.duration}
              examStartTime={questionItem.startTime}
              examEndTime={questionItem.endTime}
              examDate={questionItem.date}
              te={questionItem.date}
              isCompleted={questionItem.isCompleted}
              user={props.user}
            />
          );
        })
      ) : (
        <Col>
          <p className={"CourseName"}>
            No Exams Conducted. Click on New Quiz to conduct!
          </p>
        </Col>
      )}
    </div>
  );
}

export default ListComponent;
