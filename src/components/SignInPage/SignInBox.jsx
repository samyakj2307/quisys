import React, {useContext, useState} from "react";
import '../../index.css';
import googleIcon from '../../images/Vector.png';
import loginInfo from "../../LoginInfo";
import {LoginContext} from "../../context/LoginContext";
import {Col, Container, Row} from "react-bootstrap";
import {FacultyContext} from "../../context/FacultyContext";

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

    function handleInputEmailChange(event) {
        const value = event.target.value;
        setInputEmail(value);
    }

    function handleInputPasswordChange(event) {
        const value = event.target.value;
        setInputPassword(value);
    }

    function handleSignIn() {

        if (user === "Faculty") {
            const faculty = details.filter((faculty) => {
                return faculty.facultyDetails.email === inputEmail;
            });
            if( faculty.length !== 0) {
                const facultyDetails = faculty[0].facultyDetails;
                console.log(facultyDetails);
                if (inputPassword === facultyDetails.password) {
                    setFacultyIsLoggedIn(true);
                    console.log("Inside");
                } else {
                    console.log("Password does not match");
                    //TODO if password does not match return Password Incorrect.
                }
            }else{
                console.log("User Unregistered");
                // TODO if arraySize 0 then return User not Registered.
            }
        } else {
            //TODO add Student Login from a File named Student Context;
            const LoginDetails = loginInfo[user][0];
            if (inputEmail === LoginDetails.email && inputPassword === LoginDetails.password) {
                setStudentIsLoggedIn(true);
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
            <Row style={{textAlign: "center"}} className={"rowClass"}>
                <Col>
                    <img className={"googleIconImage"} src={googleIcon} alt={"Google Sign Up"}/>
                </Col>
            </Row>
            <Row className={"rowClass"}>
                <Col style={{textAlign: "center"}}>
                    <input
                        className={"inputField"}
                        type={"email"}
                        placeholder={emailText}
                        onChange={handleInputEmailChange}
                        value={inputEmail}/>
                </Col>
            </Row>
            <Row className={"rowClass"}>
                <Col style={{textAlign: "center"}}>
                    <input
                        className={"inputField"}
                        type={"password"}
                        placeholder={"Password"}
                        onChange={handleInputPasswordChange}
                        value={inputPassword}/>
                </Col>
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