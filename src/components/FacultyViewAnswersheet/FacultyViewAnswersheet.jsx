import {Col, Row} from "react-bootstrap";
import "./FacultyViewAnswersheet.css";
import FacultyTableRow from './FacultyTableRow/FacultyTableRow';
import React, {useContext, useState} from "react";


function FacultyViewAnswersheet () {
    const axios = require("axios").default;

    const baseUrl = "http://localhost:3000";
    axios
        .get(baseUrl + "/getVerifiedResponses", {
            // params: {
            //
            // },
        })
        .then(function (response) {
            console.log(response);
        })

    const studentsList =[
        {
            sid: "60b129ce1715820d20f35840",
            studentName: "Sambhav Nayak",
            studentEmail: "sambhav.n@vitstudent.ac.in",
            examName: "IPWT Quiz",
            eid: "60b2677f11ce6731a0582ac4",
            studentAnswerSheet: [
                {
                    _id: "60b35bdd27c5480af8c1d3e7",
                    qid: "60b24566a497103f50b3b4ff",
                    answered: "2"
                },
                {
                    _id: "60b35bdd27c5480af8c1d3e8",
                    qid: "60b2677f11ce6731a0582ac7",
                    answered: "128 bits"
                }
            ],
            isExamCompleted: "true"
        },
        {
            sid: "60b35a3b80ba710f1c679974",
            studentName: "Ironman",
            studentEmail: "iron.man@vitstudent.ac.in",
            examName: "IPWT Quiz",
            eid: "60b2677f11ce6731a0582ac4",
            studentAnswerSheet: [
                {
                    _id: "60b35c0227c5480af8c1d3ea",
                    qid: "60b24566a497103f50b3b4ff",
                    answered: "2"
                },
                {
                    _id: "60b35c0227c5480af8c1d3eb",
                    qid: "60b2677f11ce6731a0582ac7",
                    answered: "128 bits"
                }
            ],
            isExamCompleted: "true"
        }
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