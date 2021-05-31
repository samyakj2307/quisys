import React, { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import ListComp from "./ListComponent/ListComponent";
import { FacultyQuizContext } from "../../../context/FacultyQuizContext";
import { FacultyQuestionContext } from "../../FacultyQuestionPaperPage/FacultyQuestionContext";

function ClassComponent(props) {
  const history = useHistory();
  const [quizDetails, setQuizDetails] = useContext(FacultyQuizContext);
  const [questions, setQuestions] = useContext(FacultyQuestionContext);

  function handleNewQuizButtonClick() {
    setQuizDetails({
      examName: "",
      duration: "",
      date: "",
      startTime: "",
      endTime: "",
      isCompleted: false,
      allQuestions: [],
    });
    setQuestions([]);
    history.push("/SetQuestionPaper", "New");
  }

  return (
    <Container>
      <Row>
        <Col style={{ textAlign: "left" }}>
          <h4 style={{ display: "inline" }}>
            {props.user === "Faculty" ? "Scheduled " : "Pending "}Quizzes
          </h4>
        </Col>
        <Col style={{ textAlign: "right" }}>
          {props.user === "Faculty" && (
            <button
              className={"CreateClass NewQuizButton"}
              onClick={handleNewQuizButtonClick}
            >
              New Quiz
            </button>
          )}
        </Col>
      </Row>
      <Row>
        <Col>
          <ListComp user={props.user} />
        </Col>
      </Row>
    </Container>
  );
}

export default ClassComponent;
