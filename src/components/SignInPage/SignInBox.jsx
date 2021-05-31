import React, { useContext, useState } from "react";
import "../../index.css";
import googleIcon from "../../images/Vector.png";
import { LoginContext } from "../../context/LoginContext";
import { Col, Container, Row } from "react-bootstrap";
import { FacultyDetailsContext } from "../../context/FacultyDetailsContext";
import { ClassListContext } from "../../context/ClassListContext";
import { StudentDetailsContext } from "../../context/StudentDetailsContext";

const axios = require("axios").default;

const baseUrl = "http://localhost:3000";

function SignInBox(props) {
  const user = props.userDetails;
  const emailText = user + " Email";
  const urlString = "/" + user + "SignUp";

  const [currentFacultyDetails, setCurrentFacultyDetails] = useContext(
    FacultyDetailsContext
  );
  const [currentStudentDetails, setCurrentStudentDetails] = useContext(
    StudentDetailsContext
  );

  const { Faculty, Student } = useContext(LoginContext);
  const [facultyIsLoggedIn, setFacultyIsLoggedIn] = Faculty;
  const [studentIsLoggedIn, setStudentIsLoggedIn] = Student;

  const [classDetails, setClassDetails] = useContext(ClassListContext);

  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");

  const [emailIsCorrect, setEmailIsCorrect] = React.useState(true);
  const [passwordIsCorrect, setPasswordIsCorrect] = React.useState(true);

  function handleInputEmailChange(event) {
    const value = event.target.value;
    setInputEmail(value);
  }

  function handleInputPasswordChange(event) {
    const value = event.target.value;
    setInputPassword(value);
  }

  function handleSignIn() {
    if (inputEmail === "") {
      //Null Input Email
      setEmailIsCorrect(true);
      setPasswordIsCorrect(true);
      document.getElementById("EmailInputId").classList.add("errorField");
    } else if (inputPassword === "") {
      //Null Input Password
      setEmailIsCorrect(true);
      setPasswordIsCorrect(true);
      document.getElementById("EmailInputId").classList.remove("errorField");
      document.getElementById("PasswordInputId").classList.add("errorField");
    } else {
      document.getElementById("PasswordInputId").classList.remove("errorField");
      //User Faculty
      if (user === "Faculty") {
        // making SignIn Request for Faculty
        axios
          .get(baseUrl + "/facultySignIn", {
            params: {
              email: inputEmail,
              password: inputPassword,
            },
          })
          .then(function (response) {
            const status = response.data;
            if (status !== "Unregistered User") {
              // User is Registered
              setEmailIsCorrect(true);
              document
                .getElementById("EmailInputId")
                .classList.remove("errorField");

              if (status === "Invalid Password") {
                //Invalid Pass
                setPasswordIsCorrect(false);
                document
                  .getElementById("PasswordInputId")
                  .classList.add("errorField");
              } else {
                // Password is Correct (Logging IN)
                setCurrentFacultyDetails(response.data);

                axios
                  .get(baseUrl + "/getFacultyAllClass", {
                    params: { fid: response.data._id },
                  })
                  .then(function (response) {
                    setClassDetails(response.data);
                  })
                  .catch(function (error) {
                    console.log(error);
                  });

                setFacultyIsLoggedIn(true);
                setPasswordIsCorrect(true);
                document
                  .getElementById("PasswordInputId")
                  .classList.remove("errorField");
              }
            } else {
              // Unregistered User
              setEmailIsCorrect(false);
              document
                .getElementById("EmailInputId")
                .classList.add("errorField");
              setPasswordIsCorrect(true);
              document
                .getElementById("PasswordInputId")
                .classList.remove("errorField");
            }
          })
          .catch(function (error) {
            console.log(error);
          });
      }
      // For Student
      else {
        axios
          .get(baseUrl + "/studentSignIn", {
            params: {
              email: inputEmail,
              password: inputPassword,
            },
          })
          .then(function (response) {
            const status = response.data;
            if (status !== "Unregistered User") {
              //Registered User
              setEmailIsCorrect(true);

              document
                .getElementById("EmailInputId")
                .classList.remove("errorField");
              if (status === "Invalid Password") {
                //Invalid Password
                setPasswordIsCorrect(false);

                document
                  .getElementById("PasswordInputId")
                  .classList.add("errorField");
              } else {
                //Valid Password
                console.log(response);

                setCurrentStudentDetails(response.data);

                axios
                  .get(baseUrl + "/getStudentAllClass", {
                    params: { sid: response.data._id },
                  })
                  .then(function (response) {
                    setClassDetails(response.data);
                  })
                  .catch(function (error) {
                    console.log(error);
                  });

                setStudentIsLoggedIn(true);
                setPasswordIsCorrect(true);

                document
                  .getElementById("PasswordInputId")
                  .classList.remove("errorField");
              }
            } else {
              // Unregistered User
              setEmailIsCorrect(false);

              document
                .getElementById("EmailInputId")
                .classList.add("errorField");

              setPasswordIsCorrect(true);

              document
                .getElementById("PasswordInputId")
                .classList.remove("errorField");
            }
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    }
  }

  return (
    <Container className={"signIn-UpBox"}>
      <Row className={"rowClass"}>
        <Col style={{ textAlign: "center" }}>
          <p className={"welcomeText"}>Welcome Back</p>
        </Col>
      </Row>
      <Row
        style={{ textAlign: "center" }}
        className={" rowClass GoogleIconContainer"}
      >
        <Col>
          <img
            className={"googleIconImage"}
            src={googleIcon}
            alt={"Google Sign Up"}
          />
        </Col>
      </Row>
      <Row className={"rowClass"}>
        <Col style={{ textAlign: "center" }}>
          <input
            id={"EmailInputId"}
            className={"inputField"}
            type={"email"}
            placeholder={emailText}
            onChange={handleInputEmailChange}
            value={inputEmail}
          />
        </Col>
      </Row>
      <Row className={"rowClass"}>
        {!emailIsCorrect && (
          <Col style={{ textAlign: "center" }}>
            <div className={"errorText"}>Unregistered User</div>
          </Col>
        )}
      </Row>
      <Row className={"rowClass"}>
        <Col style={{ textAlign: "center" }}>
          <input
            id={"PasswordInputId"}
            className={"inputField"}
            type={"password"}
            placeholder={"Password"}
            onChange={handleInputPasswordChange}
            value={inputPassword}
          />
        </Col>
      </Row>
      <Row className={"rowClass"}>
        {!passwordIsCorrect && (
          <Col style={{ textAlign: "center" }}>
            <div className={"errorText"}>Incorrect Password</div>
          </Col>
        )}
      </Row>
      <Row className={"rowClass"}>
        <Col style={{ textAlign: "center" }}>
          <button className={"signIn-UpButton"} onClick={handleSignIn}>
            Sign In
          </button>
        </Col>
      </Row>

      <Row className={"linkTextContainer"}>
        <Col style={{ textAlign: "center" }}>
          New here?&nbsp; <a href={urlString}>Create an account</a>
        </Col>
      </Row>
      <Row className={"linkTextContainer"}>
        <Col style={{ textAlign: "center" }}>
          <a href="/">Forgot your password?</a>
          {/*TODO add this Page*/}
        </Col>
      </Row>
    </Container>
  );
}

export default SignInBox;
