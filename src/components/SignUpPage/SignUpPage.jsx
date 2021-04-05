import React from "react";
import SignUpBox from "./SignUpBox";
import "../../index.css"
import {Col, Container, Row} from "react-bootstrap";

function SignUpPage(props) {
    return (
        <Container style={{textAlign: "center",height:"100vh"}}>
            <Row style={{width:"fit-content" , margin:"50px auto 0px"}}>
                <Col style={{width:"fit-content"}}>
                <SignUpBox
                    userDetails={props.userType}/>
                </Col>
            </Row>
        </Container>
    )
}

export default SignUpPage;