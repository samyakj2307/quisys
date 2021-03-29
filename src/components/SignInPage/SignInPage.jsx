import React from "react";
import SignInBox from "./SignInBox";
import "../../index.css"

function SignInPage(props) {
    return (
        <div className={"mainContainerSignIn-UpPage"}>
            <div className={"boxContainerSignIn-UpPage"}>
                <SignInBox
                    userDetails={props.userType}/>
            </div>
        </div>
    )
}

export default SignInPage;