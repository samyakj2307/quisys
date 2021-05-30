import React, {useContext} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col, Row} from "react-bootstrap";

import {FacultyDetailsContext} from "../../../../context/FacultyDetailsContext";
import {StudentDetailsContext} from "../../../../context/StudentDetailsContext";
import {QuizListContext} from "../../../../context/QuizListContext";
import {SelectedClassContext} from "../../../../context/SelectedClassContext";

const axios = require("axios").default;

const baseUrl = "http://localhost:3000";

function LeftAllClassList(props) {

    const [currentFacultyDetails, setCurrentFacultyDetails] = useContext(FacultyDetailsContext);
    const [currentStudentDetails, setCurrentStudentDetails] = useContext(StudentDetailsContext);
    const [quizDetails, setQuizDetails] = useContext(QuizListContext);
    const [selectedClass, setSelectedClass] = useContext(SelectedClassContext);

    function handleButtonClick() {
        setSelectedClass((prevSelectedCLass) => {
            return {id: props.id, className: props.className};
        })

        axios
            .get(baseUrl + "/getAllExams", {
                params: {
                    cid: props.id
                }
            })
            .then(function (response) {
                setQuizDetails(response.data)
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <div>
            <Row>
                <Col>
                    <a onClick={handleButtonClick} style={{cursor: "pointer"}}>{props.className}</a>
                </Col>
            </Row>
        </div>
    );
}

export default LeftAllClassList;