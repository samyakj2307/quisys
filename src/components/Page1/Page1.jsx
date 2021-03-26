import React from "react";
import logo1 from "./quisysImage.png";
import './Page1.css';

function Page1() {
    return (<div className="divi">
        <img src={logo1} alt="quisy"/>
        <h1>LOGIN</h1>

        <button type="submit" >
            <p>Login as Teacher</p></button>
        <br/>
        <button type="submit"><p>Login as Student</p></button>
    </div>)
}

export default Page1;