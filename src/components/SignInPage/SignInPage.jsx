import React from "react";
import SignInBox from "./SignInBox/SignInBox";
import "./SignInPage.css";

function SignInPage(props) {
    return (
        <div className={"mainContainerSignInPage"}>
            <div className={"boxContainerSignInPage"}>
                <SignInBox
                    userDetails={props.userType}/>
            </div>
        </div>
    )
}

export default SignInPage;