import React from "react";
import SignUpBox from "./SignUpBox";
import "../../index.css"

function SignUpPage(props) {
    return (
        <div className={"mainContainerSignIn-UpPage"}>
            <div className={"boxContainerSignIn-UpPage"}>
                <SignUpBox
                    userDetails={props.userType}/>
            </div>
        </div>
    )
}

export default SignUpPage;