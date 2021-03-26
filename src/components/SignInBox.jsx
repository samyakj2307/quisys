import React from "react";
import '../index.css';
import InputBox from "./InputBox";

function SignInBox() {
    return (
        <div className={"signUpBox"}>
            <p>Welcome Back</p>
            <InputBox
                inputType = "email"
                placeholderText = "Faculty Email"
            />
            <InputBox
                inputType = "password"
                placeholderText = "Password"
            />
            <button className={"SignInButton"}>Sign In</button>
        </div>
    )
}

export default SignInBox;