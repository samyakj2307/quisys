import React from "react";
import '../../index.css';
import googleIcon from '../../images/Vector.png';
import InputBox from "../InputBox/InputBox";
import './SignInBox.css';
import {Link} from "react-router-dom";

function SignInBox(props) {
    const user = props.userDetails;
    const emailtext = user + " Email";
    const urlString = "/"+user+"SignUp";
    return (
        <div className={"signInBox"}>
            <p className={"welcomeText"}>Welcome Back</p>
            <div className={"googleBackground"}>
                <img src={googleIcon}/>
            </div>
            <InputBox
                inputType="email"
                placeholderText={emailtext}
            />
            <InputBox
                inputType="password"
                placeholderText="Password"
            />
            <div className={"signInButtonContainer"}>
            <button className={"SignInButton"}>Sign In</button>
            </div>

            <div className={"signUpTextContainer"}>
                <h7>New here?</h7>
                <Link to={urlString}>
                <a href="">Create an account</a>
                </Link>
                <br/>
                <a href="">Forgot your password?</a>
            </div>
        </div>
    )
}

export default SignInBox;