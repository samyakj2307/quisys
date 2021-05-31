import React, { useContext } from "react";
import "./MainPage.css";
import { Col, Container, Row } from "react-bootstrap";
import quisysLogo from "../../images/quisysLogo.png";
import { useHistory } from "react-router-dom";
import PopUp from "./PopUp/PopUp";
import { LoginContext } from "../../context/LoginContext";
import ClassComponent from "./ClassComponent/ClassComponent";
import { FacultyDetailsContext } from "../../context/FacultyDetailsContext";
import { StudentDetailsContext } from "../../context/StudentDetailsContext";
import { ClassListContext } from "../../context/ClassListContext";
import LeftAllClassList from "./ClassComponent/LeftAllClassList/LeftAllClassList";
import { SelectedClassContext } from "../../context/SelectedClassContext";

const axios = require("axios").default;

const baseUrl = "http://localhost:3000";

function MainPage(props) {
  const { Faculty, Student } = useContext(LoginContext);
  const [facultyIsLoggedIn, setFacultyIsLoggedIn] = Faculty;
  const [studentIsLoggedIn, setStudentIsLoggedIn] = Student;

  const [currentFacultyDetails, setCurrentFacultyDetails] = useContext(
    FacultyDetailsContext
  );
  const [currentStudentDetails, setCurrentStudentDetails] = useContext(
    StudentDetailsContext
  );

  const [classDetails, setClassDetails] = useContext(ClassListContext);

  const [selectedClass, setSelectedClass] = useContext(SelectedClassContext);

  const [modalShow, setModalShow] = React.useState(false);
  const history = useHistory();

  function logout() {
    if (props.user === "Faculty") {
      setFacultyIsLoggedIn(false);
    } else {
      setStudentIsLoggedIn(false);
    }
  }

  function openPopUp() {
    return setModalShow(true);
  }

  return (
    <Container>
      <Row className={"NavBarContainer"}>
        <Col className={"LogoContainer"}>
          <img className={"quisysLogo"} src={quisysLogo} alt={"quisys-logo"} />
        </Col>
        <Col style={{ textAlign: "center" }}>
          <p className={"CourseName"}>{selectedClass.className}</p>
        </Col>
        <Col>
          <Row>
            <Col md={8} style={{ textAlign: "right" }}>
              {props.user === "Faculty"
                ? currentFacultyDetails.name
                : currentStudentDetails.name}
              <br />
              {props.user === "Faculty"
                ? currentFacultyDetails.email
                : currentStudentDetails.email}
            </Col>

            <Col md={4}>
              <button onClick={logout} className={"LogoutBtn"}>
                Logout
              </button>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className={"secondContainer"}>
        <Col
          md={2.5}
          className={"joinClassContainer"}
          style={{ marginRight: "14px" }}
        >
          <Row>
            <Col>
              <button className={"CreateClass"} onClick={openPopUp}>
                New Class
              </button>
            </Col>
          </Row>
          <Row>
            <Col>
              <h4 className={"AllClass"}>All Classes</h4>
            </Col>
          </Row>
          {classDetails.map((facultyClass) => {
            return (
              <LeftAllClassList
                key={facultyClass._id}
                id={facultyClass._id}
                className={facultyClass.className}
              />
            );
          })}
        </Col>

        <Col
          md={0.5}
          style={{
            borderLeft: "3px solid black",
            height: "100vh",
            textAlign: "center",
          }}
        />
        {selectedClass.id !== "" ? (
          <Col md={8}>
            <ClassComponent user={props.user} />
          </Col>
        ) : (
          <Col>
            <p className={"CourseName"}>Please Select a Class to Continue!</p>
          </Col>
        )}
      </Row>
      <PopUp
        user={props.user}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </Container>
  );
}

export default MainPage;
