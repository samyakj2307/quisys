import React from "react";
import googleIcon from '../../images/Vector.png';
import '../../index.css'

function SignUpBox(props) {
    const user = props.userDetails;
    const heading = user + " SignUp"
    const nameText = user + " Name";
    const emailText = user + " Email";

    const [inputName, setInputName] = React.useState("");
    const [inputEmail, setInputEmail] = React.useState("");
    const [inputPassword, setInputPassword] = React.useState("");
    const [inputRePass, setInputRePass] = React.useState("");

    function handleInputNameChange(event) {
        const value = event.target.value;
        setInputName(value);
    }

    function handleInputEmailChange(event) {
        const value = event.target.value;
        setInputEmail(value);
    }

    function handleInputPasswordChange(event) {
        const value = event.target.value;
        setInputPassword(value);
    }

    function handleInputRePassChange(event) {
        const value = event.target.value;
        setInputRePass(value);
    }

    return (
        <div className={"signIn-UpBox"}>
            <p className={"welcomeText"}>{heading}</p>
            <div className={"googleBackground"}>
                <img src={googleIcon}/>
            </div>
            <div className={"inputFieldContainer"}>
                <input
                    className={"inputField"}
                    type={"name"}
                    placeholder={nameText}
                    onChange={handleInputNameChange}
                    value={inputName}/>
                <br/>
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
                <br/>
                <input
                    className={"inputField"}
                    type={"password"}
                    placeholder={"Repeat Password"}
                    onChange={handleInputRePassChange}
                    value={inputRePass}/>
            </div>
            <div className={"signIn-UpButtonContainer"}>
                <button className={"signIn-UpButton"}>Sign Up</button>
            </div>
        </div>
    )
}

export default SignUpBox;