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

            <div className={"divContainer"}>
                <h7>New here?</h7>
                <a href="">Create an account</a>
                <br/>
                <a href="">Forgot your password?</a>
            </div>
        </div>
    )
}

export default SignInBox;