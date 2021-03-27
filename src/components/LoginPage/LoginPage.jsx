import React from "react";
import SignInBox from "../SignInBox/SignInBox";
import "./LoginPage.css";

function LoginPage(props) {
    return (
        <div className={"mainContainer"}>
            <div className={"boxContainer"}>
                <SignInBox
                    userDetails={props.userType}/>
            </div>
        </div>
    )
}

export default LoginPage;