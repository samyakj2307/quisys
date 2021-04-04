import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import "./ListRow.css"

import 'bootstrap/dist/css/bootstrap.min.css';

function ListRow(props) {

    return (
        <Container className={"listRowContainer"}>
            <Row>
                <Col md={4}>
                    <p>
                        {props.index+1}. {props.examName}
                    </p>
                </Col>
                <Col md={4} className={"DateTime"}>
                    <Row>
                        <Col>
                            {props.examDuration} Minutes
                        </Col>
                        <Col>
                            {props.examStartTime}-{props.examEndTime}
                            <br/>
                            {props.examDate}
                        </Col>
                    </Row>
                </Col>
                <Col className={"buttonContainer"} md={4}>
                    <Col>
                        <button className={"ListComponentButton"}>Check</button>
                        <button className={"ListComponentButton"}> Edit Quiz</button>
                    </Col>
                </Col>
            </Row>
        </Container>
    );
}

export default ListRow;