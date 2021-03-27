import React from "react";
import SignUpBox from "../SignUpBox/SignUpBox";
import "./SignUpPage.css";

function SignUpPage(props) {
    return (
        <div className={"mainContainer"}>
            <div className={"boxContainer"}>
                <SignUpBox
                    userDetails={props.userType}/>
            </div>
        </div>
    )
}

export default SignUpPage;