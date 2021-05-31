import { Col, Row } from "react-bootstrap";
import "./FacultyViewAnswersheet.css";
import FacultyTableRow from "./FacultyTableRow/FacultyTableRow";
import React, { useContext } from "react";
import { ExamStudentListContext } from "../../context/ExamStudentListContext";
import { useHistory } from "react-router-dom";

const axios = require("axios").default;

const baseUrl = "http://localhost:3000";

function FacultyViewAnswersheet() {
  const history = useHistory();

  const user = history.location.state;

  function handlePublish() {
    // axios
    //     .get(baseUrl + "/sendMail")
    //     .then(function (response) {
    //         console.log(response.data)
    //     })
    //     .catch(function (error) {
    //         console.log(error);
    //     });

    history.push("/FacultyHomePage");
  }

  const [examStudentDetails, setExamStudentDetails] = useContext(
    ExamStudentListContext
  );

  return (
    <div className="container">
      <Row>
        <Col className="col-md-12">
          <table id="studentResponseTable">
            <thead>
              <tr>
                <th id="NameHeading">Name</th>
                <th id="NameHeading">Email</th>
                <th id="NameHeading">Marks Scored</th>
                <th id="NameHeading">Verify</th>
              </tr>
            </thead>
            <tbody>
              {examStudentDetails.map((student, index) => {
                return (
                  <FacultyTableRow
                    key={index}
                    index={index}
                    student={student}
                    user={user}
                  />
                );
              })}
            </tbody>
          </table>
        </Col>
      </Row>
      <Row>
        <Col>
          <button className={"publishBtn"} onClick={handlePublish}>
            Publish
          </button>
        </Col>
      </Row>
    </div>
  );
}

export default FacultyViewAnswersheet;
