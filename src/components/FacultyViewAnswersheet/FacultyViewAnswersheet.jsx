import {Col, Row} from "react-bootstrap";
import "./FacultyViewAnswersheet.css";
import FacultyTableRow from './FacultyTableRow/FacultyTableRow';
import React, {useContext, useState} from "react";


function FacultyViewAnswersheet () {
    const studentsList = [
        {
            name:"sambhav",
            email:"sam.dd@vitstudent.ac.in",
            marks:10
        },
        {
            name:"samyak",
            email:"samyak.dd@vitstudent.ac.in",
            marks:0
        },
        {
            name:"manan",
            email:"manan.dd@vitstudent.ac.in",
            marks:10
        },
    ]

    return(
        <div className="container">
        <Row>
            <Col className="col-md-12">
                <table id="studentResponseTable">
                    <thead>
                    <tr>
                        <th id="NameHeading">Name</th>
                        <th id="NameHeading">Email</th>
                        <th id="NameHeading">Marks Scored</th>
                        <th id="NameHeading">Verify</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        studentsList.map((student) => {
                            return (
                                <FacultyTableRow
                                    name={student.name}
                                    email={student.email}
                                    marks = {student.marks}
                                />
                            )
                        })
                    }
                    </tbody>
                </table>
            </Col>
        </Row>
        <Row>
            <Col>
                <button className={"publishBtn"}>Publish</button>
            </Col>
        </Row>
    </div>
    )

}

export default FacultyViewAnswersheet;