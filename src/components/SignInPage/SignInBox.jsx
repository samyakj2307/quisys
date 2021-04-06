import React, {useContext, useState} from "react";
import '../../index.css';
import googleIcon from '../../images/Vector.png';
import {LoginContext} from "../../context/LoginContext";
import {Col, Container, Row} from "react-bootstrap";
import {FacultyContext} from "../../context/FacultyContext";
import {StudentContext} from "../../context/StudentContext";

function SignInBox(props) {
    const user = props.userDetails;
    const emailText = user + " Email";
    const urlString = "/" + user + "SignUp";

    const [details, setDetails] = useContext(FacultyContext);

    const {Faculty, Student} = useContext(LoginContext);
    const [facultyIsLoggedIn, setFacultyIsLoggedIn] = Faculty;
    const [studentIsLoggedIn, setStudentIsLoggedIn] = Student;
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
            setEmailIsCorrect(true);
            setPasswordIsCorrect(true);
            document.getElementById("EmailInputId").classList.add("errorField");
        } else if (inputPassword === "") {
            setEmailIsCorrect(true);
            setPasswordIsCorrect(true);
            document.getElementById("EmailInputId").classList.remove("errorField");
            document.getElementById("PasswordInputId").classList.add("errorField");
        } else {
            document.getElementById("PasswordInputId").classList.remove("errorField");
            if (user === "Faculty") {
                const faculty = facultyDetails.filter((faculty) => {
                    return faculty.facultyDetails.email === inputEmail;
                });

                if (faculty.length !== 0) {
                    setEmailIsCorrect(true);
                    document.getElementById("EmailInputId").classList.remove("errorField");

                    const facultyDetails = faculty[0].facultyDetails;
                    if (inputPassword === facultyDetails.password) {
                        setFacultyIsLoggedIn(true);
                        setPasswordIsCorrect(true);
                        document.getElementById("PasswordInputId").classList.remove("errorField");

                    } else {
                        setPasswordIsCorrect(false);
                        document.getElementById("PasswordInputId").classList.add("errorField");
                    }
                } else {
                    setEmailIsCorrect(false);
                    document.getElementById("EmailInputId").classList.add("errorField");
                    setPasswordIsCorrect(true);
                    document.getElementById("PasswordInputId").classList.remove("errorField");
                }
            }
            // For Student
            else {
                const student = studentDetails.filter((student) => {
                    return student.studentDetails.email === inputEmail;
                });

                if (student.length !== 0) {
                    setEmailIsCorrect(true);
                    document.getElementById("EmailInputId").classList.remove("errorField");

                    const studentDetails = student[0].studentDetails;
                    if (inputPassword === studentDetails.password) {
                        setStudentIsLoggedIn(true);
                        setPasswordIsCorrect(true);
                        document.getElementById("PasswordInputId").classList.remove("errorField");
                    } else {
                        setPasswordIsCorrect(false);
                        document.getElementById("PasswordInputId").classList.add("errorField");
                    }
                } else {
                    setEmailIsCorrect(false);
                    document.getElementById("EmailInputId").classList.add("errorField");

                    setPasswordIsCorrect(true);
                    document.getElementById("PasswordInputId").classList.remove("errorField");
                }

        }
    }

    return (
        <Container className={"signIn-UpBox"}>
            <Row className={"rowClass"}>
                <Col style={{textAlign: "center"}}>
                    <p className={"welcomeText"}>Welcome Back</p>
                </Col>
            </Row>
            <Row style={{textAlign: "center"}} className={" rowClass GoogleIconContainer"}>
                <Col>
                    <img className={"googleIconImage"} src={googleIcon} alt={"Google Sign Up"}/>
                </Col>
            </Row>
            <Row className={"rowClass"}>
                <Col style={{textAlign: "center"}}>
                    <input
                        id={"EmailInputId"}
                        className={"inputField"}
                        type={"email"}
                        placeholder={emailText}
                        onChange={handleInputEmailChange}
                        value={inputEmail}/>
                </Col>
            </Row>
            <Row className={"rowClass"}>
                {!emailIsCorrect &&
                <Col style={{textAlign: "center"}}>
                    <div
                        className={"errorText"}>
                        Unregistered User
                    </div>
                </Col>}
            </Row>
            <Row className={"rowClass"}>
                <Col style={{textAlign: "center"}}>
                    <input
                        id={"PasswordInputId"}
                        className={"inputField"}
                        type={"password"}
                        placeholder={"Password"}
                        onChange={handleInputPasswordChange}
                        value={inputPassword}/>
                </Col>
            </Row>
            <Row className={"rowClass"}>

                {!passwordIsCorrect &&
                <Col style={{textAlign: "center"}}>
                    <div
                        className={"errorText"}>
                        Incorrect Password
                    </div>
                </Col>
                }
            </Row>
            <Row className={"rowClass"}>
                <Col style={{textAlign: "center"}}>
                    <button
                        className={"signIn-UpButton"}
                        onClick={handleSignIn}>
                        Sign In
                    </button>
                </Col>
            </Row>

            <Row className={"linkTextContainer"}>
                <Col style={{textAlign: "center"}}>
                    New here?&nbsp; <a href={urlString}>Create an account</a>
                </Col>

            </Row>
            <Row className={"linkTextContainer"}>
                <Col style={{textAlign: "center"}}>
                    <a href="">Forgot your password?</a>
                </Col>
            </Row>
        </Container>
    )
}

export default SignInBox;