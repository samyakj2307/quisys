import "./FacultyAssignMarks.css";
import React, { useContext, useState } from "react";
import { Col, Row } from "react-bootstrap";
import FacultyAssignRow from "./FacultyAssignRow";
import { useHistory } from "react-router-dom";
import { ExamStudentListContext } from "../../context/ExamStudentListContext";

const axios = require("axios").default;

const baseUrl = "http://localhost:3000";

function FacultyAssignMarks() {
  const history = useHistory();
  const user = history.location.state.user;
  const marksList = history.location.state.student;
  const index = history.location.state.index;

  const [examStudentDetails, setExamStudentDetails] = useContext(
    ExamStudentListContext
  );

  const [totalMarks, setTotalMarks] = useState(marksList.totalMarks);

  function handleMarksChange(value, index) {
    marksList.studentAnswerSheet[index]["marksAwarded"] = value;
    let total = 0;
    for (let k = 0; k < marksList.studentAnswerSheet.length; k++) {
      if (marksList.studentAnswerSheet[k].marksAwarded !== undefined) {
        total = total + parseInt(marksList.studentAnswerSheet[k].marksAwarded);
      }
    }

    setTotalMarks(total);
  }

  function handleSaveMarks() {
    console.log(marksList);
    marksList["totalMarks"] = totalMarks;
    axios
      .post(baseUrl + "/verifiedResponses", marksList)
      .then(function (response) {
        console.log(response.data);
        setExamStudentDetails((prevState) => {
          prevState[index] = marksList;
          return prevState;
        });
        history.push("/ExamStudentList");
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <div className={"container"}>
      <Row className={"col1 col3"} style={{ textAlign: "center" }}>
        <Col>
          <h3>{marksList.studentName}</h3>
        </Col>
        <Col>
          <h3>{marksList.examName}</h3>
        </Col>
        <Col>
          <h3>Total=[{totalMarks}]</h3>
        </Col>
      </Row>

      {marksList.studentAnswerSheet.map((question, index) => {
        return (
          <FacultyAssignRow
            key={question._id}
            index={index}
            question={question}
            handleMarksChange={handleMarksChange}
            user={user}
          />
        );
      })}
      <Row className={" row row3"}>
        <Col className={"col-md-12"}>
          {user === "Faculty" && (
            <button className={"saveBtn"} onClick={handleSaveMarks}>
              Save
            </button>
          )}
        </Col>
      </Row>
    </div>
  );
}

export default FacultyAssignMarks;
