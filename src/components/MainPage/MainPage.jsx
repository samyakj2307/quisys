import React, {useContext} from 'react';
import './MainPage.css';
import {Col, Container, Row} from "react-bootstrap";
import quisysLogo from "../../images/quisysLogo.png";
import {useHistory} from 'react-router-dom';
import PopUp from "./PopUp/PopUp";
import {LoginContext} from "../../context/LoginContext";
import ClassComponent from "./ClassComponent/ClassComponent";
import {FacultyDetailsContext} from "../../context/FacultyDetailsContext";
import {StudentDetailsContext} from "../../context/StudentDetailsContext";
import {ClassListContext} from "../../context/ClassListContext";
import LeftAllClassList from "./ClassComponent/LeftAllClassList/LeftAllClassList";
import {SelectedClassContext} from "../../context/SelectedClassContext";

const axios = require("axios").default;

const baseUrl = "http://localhost:3000";

function MainPage(props) {
    const {Faculty, Student} = useContext(LoginContext);
    const [facultyIsLoggedIn, setFacultyIsLoggedIn] = Faculty;
    const [studentIsLoggedIn, setStudentIsLoggedIn] = Student;

    const [currentFacultyDetails, setCurrentFacultyDetails] = useContext(FacultyDetailsContext);
    const [currentStudentDetails, setCurrentStudentDetails] = useContext(StudentDetailsContext);

    const [classDetails, setClassDetails] = useContext(ClassListContext);

    const [selectedClass, setSelectedClass] = useContext(SelectedClassContext);

    const [modalShow, setModalShow] = React.useState(false);
    const history = useHistory();

    function logout() {
        if (props.user === "Faculty") {
            setFacultyIsLoggedIn(false);
        } else {
            setStudentIsLoggedIn(false);
        }
        //TODO check if wanna use useHistory()
        // history.push('/');
    }

    function openPopUp() {
        return setModalShow(true);
    }

    return (
        <Container className={"Container1"}>
            <Row className={"NavBarContainer"}>
                <Col className={"LogoContainer"}>
                    <img className={"quisysLogo"} src={quisysLogo} alt={"quisys-logo"}/>
                </Col>
                <Col>
                    <p className={"CourseName"}>{selectedClass.className}</p>
                </Col>
                <Col style={{textAlign: "right"}}>
                    <div style={{display: "inline-block"}} className={"userDetails"}>
                        {(props.user === "Faculty") ?
                            currentFacultyDetails.name :
                            currentStudentDetails.name}
                        <br/>
                        {(props.user === "Faculty") ?
                            currentFacultyDetails.email :
                            currentStudentDetails.email}
                    </div>
                    <div style={{display: "inline-block"}}>
                        <button onClick={logout} className={"LogoutBtn"}>Logout</button>
                    </div>
                </Col>
            </Row>
            <Row className={"secondContainer"}>
                <Col md={3} className={"joinClassContainer"}>
                    <Row>
                        <Col>
                            <button className={"CreateClass"} onClick={openPopUp}>New Class</button>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h4 className={"AllClass"}>All Classes</h4>
                        </Col>
                    </Row>
                    {
                        classDetails.map((facultyClass) => {
                            return (
                                <LeftAllClassList
                                    key={facultyClass._id}
                                    id={facultyClass._id}
                                    className={facultyClass.className}
                                />
                            )
                        })
                    }
                </Col>
                {
                    (selectedClass.id !== "") ?
                        <Col md={9} className="PendingQuizzesContainer">
                            <ClassComponent
                                user={props.user}/>
                        </Col> :
                        <Col>
                            <p className={"CourseName"}>Please Select a Class to Continue!</p>
                        </Col>
                }
            </Row>
            <PopUp
                user={props.user}
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </Container>

    );
}

export default MainPage;

