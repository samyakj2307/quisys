import React from "react";
import SignUpBox from "./SignUpBox/SignUpBox";
import "./SignUpPage.css";

function SignUpPage(props) {
    return (
        <div className={"mainContainerSignUpPage"}>
            <div className={"boxContainerSignUpPage"}>
                <SignUpBox
                    userDetails={props.userType}/>
            </div>
        </div>
    )
}

export default SignUpPage;