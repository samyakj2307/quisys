import React from "react";
import '../index.css';
import googleIcon from './Vector.png';
import InputBox from "./InputBox";
import './SignInBox.css';

function SignInBox(props) {
    const emailtext = props.userDetails + " Email";
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
                <a href="">Create an account</a>
                <br/>
                <a href="">Forgot your password?</a>
            </div>
        </div>
    )
}

export default SignInBox;