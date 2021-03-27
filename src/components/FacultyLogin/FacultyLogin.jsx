import React from "react";
import SignInBox from "../SignInBox";
import "./FacultyLogin.css";

function FacultyLogin() {
    return (
        <div className={"mainContainer"}>
            <div className={"boxContainer"}>
                <SignInBox
                    userDetails={"Faculty"}/>
            </div>
        </div>
    )
}

export default FacultyLogin;