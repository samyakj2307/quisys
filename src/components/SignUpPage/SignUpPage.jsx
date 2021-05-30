import React from "react";
import SignUpBox from "./SignUpBox";
import "../../index.css"
import {Col, Row} from "react-bootstrap";
import quisysLogo from "../../images/quisysLogo.png";

function SignUpPage(props) {
    return (
        <div style={{textAlign: "center", height: "100vh"}}>
            <Row style={{width: "fit-content"}}>
                <Col style={{textAlign: "left", marginLeft: "10px", marginTop: "10px"}}>
                    <img className={"quisysLogo"} src={quisysLogo} alt={"quisys-logo"}/>
                </Col>
            </Row>
            <Row style={{width: "fit-content", margin: "50px auto 0px"}}>
                <Col style={{width: "fit-content"}}>
                    <SignUpBox
                        userDetails={props.userType}/>
                </Col>
            </Row>
        </div>
    )
}

export default SignUpPage;