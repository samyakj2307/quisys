import {Col, Row} from "react-bootstrap";
import "./FacultyViewAnswersheet.css";
import FacultyTableRow from './FacultyTableRow/FacultyTableRow';
import React, {useContext, useState} from "react";
import {ExamStudentListContext} from "../../context/ExamStudentListContext";


function FacultyViewAnswersheet () {


    const [examStudentDetails, setExamStudentDetails] = useContext(ExamStudentListContext)

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
                        examStudentDetails.map((student,index) => {
                            return (
                                <FacultyTableRow
                                    key={index}
                                    index={index}
                                    student={student}
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