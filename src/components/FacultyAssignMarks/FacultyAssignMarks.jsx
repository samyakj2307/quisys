import "./FacultyAssignMarks.css";
import React from "react";
import {Col, Row} from "react-bootstrap";
import FacultyAssignRow from "./FacultyAssignRow";

function FacultyAssignMarks() {
    const studentsList =
        {
            "sid": "60b129ce1715820d20f35840",
            "studentName": "Sambhav Nayak",
            "studentEmail": "sambhav.n@vitstudent.ac.in",
            "examName": "IPWT Quiz",
            "eid": "60b2677f11ce6731a0582ac4",
            "studentAnswerSheet": [
                {
                    "_id": "60b35bdd27c5480af8c1d3e7",
                    "qid": "60b24566a497103f50b3b4ff",
                    "answered": "2"
                },
                {
                    "_id": "60b35bdd27c5480af8c1d3e8",
                    "qid": "60b2677f11ce6731a0582ac7",
                    "answered": "128 bits"
                }
            ],
            "isExamCompleted": "true"
        }


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


            {/*{*/}
            {/*    marksList.map((student) => {*/}
            {/*        return (*/}
            {/*            <FacultyAssignRow*/}
            {/*                name={student.name}*/}
            {/*                email={student.email}*/}
            {/*                marks={student.marks}*/}
            {/*            />*/}
            {/*        )*/}
            {/*    })*/}
            {/*}*/}
            <Row className={" row row3"}>
                <Col className={"col-md-12"}>
                    <button className={"saveBtn"}>Save</button>
                </Col>
            </Row>
        </div>
    )
}

export default FacultyAssignMarks;