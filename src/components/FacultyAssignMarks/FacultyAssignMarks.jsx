import "./FacultyAssignMarks.css.css";
import React from "react";
import {Col, Row} from "react-bootstrap";

function FacultyAssignMarks() {
    return (
        <div className={"container"}>
            <Row className={" col1"}>
                <Col className={"col-md-4"}>
                    <h3>19BDS0141</h3>
                </Col>
                <Col className={"col-md-4"}>
                    <h3>QUIZ-1</h3>
                </Col>
                <Col className={"col-md-4"}>
                    <label htmlFor="total">
                        <h3>Total:-</h3>
                    </label>
                    <input type="text" id="total" name="total"/>
                </Col>
            </Row>


            <Row className={"row"}>

                <Col className={"col-md-12 col1"}>
                    <Row className={"row"}>
                        <Col className={"col-md-10"} style="text-align:center;">
                            <Row className={"row"} style="text-align:center;">
                                <Col className={"col-md-12 col1"}>
                                    <h3>Questions</h3>

                                </Col>
                            </Row>
                            <Row className={"row"} style="text-align:center;">
                                <Col className={"col-md-8 col2"}>
                                    <h3>Options</h3>
                                </Col>
                                <Col className={"col-md-4 col3"}>
                                    <input type="text" id="total1" name="total1"/>
                                </Col>
                            </Row>
                        </Col>
                    </Row>

                </Col>


            </Row>

            <Row className={" row row3"}>
                <Col className={"col-md-12"}>
                    <button className={"saveBtn"}>Save</button>
                </Col>
            </Row>
        </div>
    )
}

export default FacultyAssignMarks;