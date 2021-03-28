import React from "react";
import googleIcon from '../../../images/Vector.png';
import InputBox from "../../InputBox/InputBox";
import './SignUpBox.css';

function SignUpBox(props) {
    const user = props.userDetails;
    const heading = user + " SignUp"
    const nameText = user + " Name";
    const emailText = user + " Email";
    return (
        <div className={"signUpBox"}>
            <p className={"welcomeText"}>{heading}</p>
            <div className={"googleBackground"}>
                <img src={googleIcon}/>
            </div>
            <InputBox
                inputType="text"
                placeholderText={nameText}
            />
            <InputBox
                inputType="email"
                placeholderText={emailText}
            />
            <InputBox
                inputType="password"
                placeholderText="Password"
            />
            <InputBox
                inputType="password"
                placeholderText="Repeat Password"
            />
            <div className={"signUpButtonContainer"}>
                <button className={"SignUpButton"}>Sign Up</button>
            </div>
        </div>
    )
}

export default SignUpBox;