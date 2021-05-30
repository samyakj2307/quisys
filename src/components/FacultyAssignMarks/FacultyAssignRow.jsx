import React from "react";
import {Col, Row} from "react-bootstrap";

function FacultyAssignRow(props) {

    function handleMarksChange(event) {
        const marks = event.target.value;
        props.handleMarksChange(marks, props.index);
    }


    return (
        <Row className={"row"}>

            <Col className={"col1"} md={12} style={{padding: "0 3em"}}>
                <Row className={"row"}>
                    <Col md={12}>

                        <Row>
                            <Col className={"col1 col2"}>
                                <h3><strong>Question: </strong>{props.question.question}</h3>

                            </Col>
                        </Row>

                        <Row className={"row"}>
                            <Col className={"col1 col-padding col2"} md={8}>
                                <h3><strong>Answered:</strong> {props.question.answered}</h3>
                            </Col>
                            <Col className={"col1 col-padding"} style={{marginLeft: "10px", textAlign: "center"}}>
                                <input onChange={handleMarksChange} type="number" id="total1" name="total1"/>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Col>


        </Row>
    )

}

export default FacultyAssignRow;