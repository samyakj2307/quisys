import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import ListComp from "./ListComponent/ListComponent";

function ClassComponent(props) {
    return (
        <Container>
            <Row>
                <Col style={{textAlign: "left"}}>
                    <h4 style={{display: "inline"}}>{props.user === "Faculty" ? "Scheduled " : "Pending "}Quizzes</h4>
                </Col>
                {/*<Col>*/}
                {/*    <p className={"CourseName"}>IPWT</p>*/}
                {/*</Col>*/}
                <Col style={{textAlign: "right"}}>
                    {props.user === "Faculty" &&
                    <Link to={"/SetQuestionPaper"}>
                        <button className={"CreateClass NewQuizButton"}>New Quiz</button>
                    </Link>
                    }
                </Col>
            </Row>
            <Row>
                <Col>
                    <ListComp
                        user={props.user}/>
                </Col>
            </Row>
        </Container>
    )
}

export default ClassComponent;