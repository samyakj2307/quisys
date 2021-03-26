import React from "react";
import SignInBox from "./SignInBox";

const myStyle = {
    margin: "0",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)"
}

function FacultyLogin() {
    return (
        <div style={myStyle}>
            <SignInBox
                userDetails={"Faculty"}/>
        </div>
    )
}

export default FacultyLogin;