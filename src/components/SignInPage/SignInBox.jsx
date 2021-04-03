import React, {useContext, useState} from "react";
import '../../index.css';
import googleIcon from '../../images/Vector.png';
import loginInfo from "../../LoginInfo";
import {FacultyLoginContext} from "../../context/FacultyLoginContext";
import {StudentLoginContext} from "../../context/StudentLoginContext"

function SignInBox(props) {
    const user = props.userDetails;
    const emailText = user + " Email";
    const urlString = "/" + user + "SignUp";

    const [facultyIsLoggedIn, setFacultyIsLoggedIn] = useContext(FacultyLoginContext);
    const [studentIsLoggedIn, setStudentIsLoggedIn] = useContext(StudentLoginContext);
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
        const LoginDetails = loginInfo[user][0];
        console.log(LoginDetails.email);
        console.log(LoginDetails.password);
        if (inputEmail === LoginDetails.email && inputPassword === LoginDetails.password) {
            if(user==="Faculty"){
                setFacultyIsLoggedIn(true);
            }else {
                setStudentIsLoggedIn(true);
            }
        }
    }

    return (
        <div className={"signIn-UpBox"}>
            <p className={"welcomeText"}>Welcome Back</p>
            <div className={"googleBackground"}>
                <img src={googleIcon} alt={"Google Sign In"}/>
            </div>
            <div className={"inputFieldContainer"}>
                <input
                    className={"inputField"}
                    type={"email"}
                    placeholder={emailText}
                    onChange={handleInputEmailChange}
                    value={inputEmail}/>
                <br/>
                <input
                    className={"inputField"}
                    type={"password"}
                    placeholder={"Password"}
                    onChange={handleInputPasswordChange}
                    value={inputPassword}/>
            </div>
            <div className={"signIn-UpButtonContainer"}>
                <button className={"signIn-UpButton"} onClick={handleSignIn}>Sign In</button>
            </div>

            <div className={"linksTextContainer"}>
                <div className={"signUpLinkContainer"}>
                    New here?
                    <a href={urlString}>Create an account</a>
                </div>
                <a href="">Forgot your password?</a>
            </div>
        </div>
    )
}

export default SignInBox;