import React, {useContext, useState} from "react";
import {Col, Row} from "react-bootstrap";

function FacultyAssignRow(props){
    return(
        <Row className={"row"}>

            <Col className={"col1"} md={12} style={{padding: "0 3em"}}>
                <Row className={"row"}>
                    <Col style={{textAlign: "center"}} md={12}>

                        <Row style={{textAlign: "center"}}>
                            <Col className={"col1"}>
                                <h3>Questions</h3>

                            </Col>
                        </Row>

                        <Row className={"row"}>
                            <Col className={"col1 col-padding"} md={8}>
                                <h3>Options</h3>
                            </Col>
                            <Col className={"col1 col-padding"} style={{marginLeft: "10px"}}>
                                <input type="text" id="total1" name="total1"/>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Col>


        </Row>
    )

}

export default FacultyAssignRow;