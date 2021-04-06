import React from "react";
import SignInBox from "./SignInBox";
import "../../index.css"
import {Col, Container, Row} from "react-bootstrap";

function SignInPage(props) {

    return (
        <Container style={{textAlign: "center", height: "100vh"}}>
            <Row style={{width: "fit-content", margin: "50px auto 0px"}}>
                <Col style={{width: "fit-content"}}>
                    <SignInBox
                        userDetails={props.userType}/>
                </Col>
            </Row>
        </Container>
    )
}

export default SignInPage;