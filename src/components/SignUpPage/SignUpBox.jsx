import React from "react";
import googleIcon from "../../images/Vector.png";
import { Col, Container, Row } from "react-bootstrap";
import "../../index.css";
import { useHistory } from "react-router-dom";

const axios = require("axios").default;

const baseUrl = "http://localhost:3000";

function SignUpBox(props) {
  let history = useHistory();
  const user = props.userDetails; //"Faculty" or "Student"
  const heading = user + " SignUp";
  const nameText = user + " Name";
  const emailText = user + " Email";

  const [inputName, setInputName] = React.useState("");
  const [inputEmail, setInputEmail] = React.useState("");
  const [inputPassword, setInputPassword] = React.useState("");
  const [inputRePass, setInputRePass] = React.useState("");

  const [emailIsValid, setEmailIsValid] = React.useState(true);
  const [passwordIsValid, setPasswordIsValid] = React.useState(true);
  const [repeatPasswordIsValid, setRepeatPasswordIsValid] =
    React.useState(true);

  function handleSignUp() {
    if (inputName === "") {
      document.getElementById("nameFieldId").classList.add("errorField");
    } else if (inputEmail === "") {
      document.getElementById("nameFieldId").classList.remove("errorField");
      document.getElementById("emailFieldId").classList.add("errorField");
    } else if (inputPassword === "") {
      document.getElementById("nameFieldId").classList.remove("errorField");
      document.getElementById("emailFieldId").classList.remove("errorField");
      document.getElementById("passwordFieldId").classList.add("errorField");
    } else if (inputRePass === "") {
      document.getElementById("nameFieldId").classList.remove("errorField");
      document.getElementById("emailFieldId").classList.remove("errorField");
      document.getElementById("passwordFieldId").classList.remove("errorField");
      document.getElementById("rePasswordFieldId").classList.add("errorField");
    } else if (emailIsValid && passwordIsValid && repeatPasswordIsValid) {
      if (user === "Faculty") {
        axios
          .post(baseUrl + "/facultySignUp", {
            name: inputName,
            email: inputEmail,
            password: inputPassword,
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
        history.push("/FacultyLogin");
      } else {
        axios
          .post(baseUrl + "/studentSignUp", {
            name: inputName,
            email: inputEmail,
            password: inputPassword,
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
        history.push("/StudentLogin");
      }
    }
  }

  function handleInputNameChange(event) {
    const value = event.target.value;
    setInputName(value);
  }

  function handleInputEmailChange(event) {
    const value = event.target.value;
    setInputEmail(value);
    let emailPattern;
    if (user === "Faculty") {
      emailPattern = "[a-z]+[.]+[a-z]+(@vit.ac.in$)";
    } else {
      emailPattern = "[a-z]+[.]+[a-z]+(@vitstudent.ac.in$)";
    }
    if (value.match(emailPattern)) {
      setEmailIsValid(true);
      event.target.classList.remove("errorField");
    } else {
      setEmailIsValid(false);
      event.target.classList.add("errorField");
    }
  }

  function handleInputPasswordChange(event) {
    const value = event.target.value;
    setInputPassword(value);
    const passwordPattern =
      "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,40}$";
    if (value.match(passwordPattern)) {
      setPasswordIsValid(true);
      event.target.classList.remove("errorField");
    } else {
      setPasswordIsValid(false);
      event.target.classList.add("errorField");
    }
  }

  function handleInputRePassChange(event) {
    const value = event.target.value;
    setInputRePass(value);
    if (value === inputPassword) {
      setRepeatPasswordIsValid(true);
      event.target.classList.remove("errorField");
    } else {
      setRepeatPasswordIsValid(false);
      event.target.classList.add("errorField");
    }
  }

  return (
    <Container className={"signIn-UpBox"}>
      <Row className={"rowClass"}>
        <Col style={{ textAlign: "center" }}>
          <p className={"welcomeText"}>{heading}</p>
        </Col>
      </Row>
      <Row
        style={{ textAlign: "center" }}
        className={"rowClass GoogleIconContainer"}
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
            id={"nameFieldId"}
            className={"inputField"}
            type={"name"}
            placeholder={nameText}
            onChange={handleInputNameChange}
            value={inputName}
          />
        </Col>
      </Row>
      <Row className={"rowClass"}>
        <Col style={{ textAlign: "center" }}>
          <input
            id={"emailFieldId"}
            className={"inputField"}
            type={"email"}
            placeholder={emailText}
            onChange={handleInputEmailChange}
            value={inputEmail}
          />
        </Col>
      </Row>
      <Row className={"rowClass"}>
        {!emailIsValid && (
          <Col style={{ textAlign: "center" }}>
            <div className={"errorText"}>
              Email should be in format of{" "}
              {user === "Faculty" ? (
                <b>
                  <i>abc.xyz@vit.ac.in</i>
                </b>
              ) : (
                <b>
                  <i>
                    <br />
                    abc.xyz@vitstudent.ac.in
                  </i>
                </b>
              )}
            </div>
          </Col>
        )}
      </Row>
      <Row className={"rowClass"}>
        <Col style={{ textAlign: "center" }}>
          <input
            id={"passwordFieldId"}
            className={"inputField"}
            type={"password"}
            placeholder={"Password"}
            onChange={handleInputPasswordChange}
            value={inputPassword}
          />
        </Col>
      </Row>
      <Row className={"rowClass"}>
        {!passwordIsValid && (
          <Col style={{ textAlign: "center" }}>
            <div className={"errorText"}>
              Minimum Length 8 chars having atleast
              <br />
              <b>
                <i>[0-9], [a-z], [A-Z], [@#$]</i>
              </b>
            </div>
          </Col>
        )}
      </Row>
      <Row className={"rowClass"}>
        <Col style={{ textAlign: "center" }}>
          <input
            id={"rePasswordFieldId"}
            className={"inputField"}
            type={"password"}
            placeholder={"Repeat Password"}
            onChange={handleInputRePassChange}
            value={inputRePass}
          />
        </Col>
      </Row>
      <Row className={"rowClass"}>
        {!repeatPasswordIsValid && (
          <Col style={{ textAlign: "center" }}>
            <div className={"errorText"}>Password does not match!</div>
          </Col>
        )}
      </Row>
      <Row className={"rowClass"}>
        <Col style={{ textAlign: "center" }}>
          <button className={"signIn-UpButton"} onClick={handleSignUp}>
            Sign Up
          </button>
        </Col>
      </Row>
    </Container>
  );
}

export default SignUpBox;
