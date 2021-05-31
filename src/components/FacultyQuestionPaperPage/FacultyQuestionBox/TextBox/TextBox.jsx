import React, { useContext, useState } from "react";
import { TextareaAutosize } from "@material-ui/core";
import { FacultyQuestionContext } from "../../FacultyQuestionContext";
import { Col, Container, Row } from "react-bootstrap";

function TextBox(props) {
  const [questions, setQuestions] = useContext(FacultyQuestionContext);
  const propQno = props.index;
  const currentQuestion = questions[propQno];

  const [textAnswer, setTextAnswer] = useState(currentQuestion.textAnswer);

  function handleTextChange(event) {
    const value = event.target.value;
    setTextAnswer(value);
    setQuestions((prevQuestions) => {
      prevQuestions[propQno].textAnswer = value;
      return prevQuestions;
    });
  }

  return (
    <Container>
      <Row>
        <Col style={{ marginLeft: "70px" }}>
          <TextareaAutosize
            name={"textAnswer"}
            className={"answerTextBox"}
            rowsMin={3}
            onChange={handleTextChange}
            placeholder={"Answer (Optional)"}
            value={textAnswer}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default TextBox;
