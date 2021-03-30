import React from "react";
import '../../index.css';
import googleIcon from '../../images/Vector.png';


function SignInBox(props) {
    const user = props.userDetails;
    const emailText = user + " Email";
    const urlString = "/" + user + "SignUp";

    const [inputEmail, setInputEmail] = React.useState("");
    const [inputPassword, setInputPassword] = React.useState("");

    function handleInputEmailChange(event) {
        const value = event.target.value;
        setInputEmail(value);
    }

    function handleInputPasswordChange(event) {
        const value = event.target.value;
        setInputPassword(value);
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
                <button className={"signIn-UpButton"}>Sign In</button>
            </div>

            <div className={"linksTextContainer"}>
                <div className={"signUpLinkContainer"}>
                    <h7>New here?</h7>
                    <a href={urlString}>Create an account</a>
                </div>
                <a href="">Forgot your password?</a>
            </div>
        </div>
    )
}

export default SignInBox;