import React, {useContext} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col, Row} from "react-bootstrap";
import "./ListRow.css"
import TimerIcon from '@material-ui/icons/Timer';
import EventIcon from '@material-ui/icons/Event';
import ScheduleIcon from '@material-ui/icons/Schedule';
import {Link} from "react-router-dom";

import {CurrentFacultyContext} from "../../../../../context/CurrentFacultyContext";
import {CurrentStudentContext} from "../../../../../context/CurrentStudentContext";

function ListRow(props) {

    const [currentFacultyDetails, setCurrentFacultyDetails] = useContext(CurrentFacultyContext);
    const [currentStudentDetails, setCurrentStudentDetails] = useContext(CurrentStudentContext);

    return (
        <div className={"listRowContainer"}>
            <Row>
                <Col md={4} className={"SubjectRowNames"}>

                    {props.index + 1}. {props.examName}

                </Col>
                <Col md={4} className={"DateTime"}>
                    <Row>
                        <Col>
                            <TimerIcon/>{props.examDuration} Minutes
                        </Col>
                        <Col>
                            <ScheduleIcon/>{props.examStartTime}-{props.examEndTime}
                            <br/>
                            <EventIcon/>{props.examDate}
                        </Col>
                    </Row>
                </Col>
                <Col className={"buttonContainer"} md={4}>
                    {props.user === "Faculty" ?
                        <Col>
                            {currentFacultyDetails.classes[0].allExams[0].isCompleted ?
                                <button className={"ListComponentButton"}>Check Answers</button> :
                                <button className={"ListComponentButton"}> Edit Quiz</button>
                            }
                        </Col> :
                        <Col>
                            {currentStudentDetails.classes[0].allExams[0].isChecked ?
                                <button className={"ListComponentButton"}>View Marks</button> :
                                <Link to={"/GiveExam"}>
                                <button className={"ListComponentButton"}>Start Quiz</button>
                                </Link>

                            }
                        </Col>
                    }
                </Col>
            </Row>
        </div>
    );
}

export default ListRow;