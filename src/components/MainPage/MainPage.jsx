import React, {useContext, useState} from 'react';
import './MainPage.css';
import {Col, Container, Row} from "react-bootstrap";
import quisysLogo from "../../images/quisysLogo.png";
import {useHistory} from 'react-router-dom';
import PopUp from "./PopUp/PopUp";
import {LoginContext} from "../../context/LoginContext";
import ClassComponent from "./ClassComponent/ClassComponent";
import {CurrentFacultyContext} from "../../context/CurrentFacultyContext";
import {CurrentStudentContext} from "../../context/CurrentStudentContext";

function MainPage(props) {
    const {Faculty, Student} = useContext(LoginContext);
    const [facultyIsLoggedIn, setFacultyIsLoggedIn] = Faculty;
    const [studentIsLoggedIn, setStudentIsLoggedIn] = Student;

    const [currentFacultyDetails, setCurrentFacultyDetails] = useContext(CurrentFacultyContext);
    const [currentStudentDetails, setCurrentStudentDetails] = useContext(CurrentStudentContext);

    const [selectedClassId, setSelectedClassId] = useState("");

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
                    <img className={"quisysLogo"} src={quisysLogo}/>
                </Col>
                <Col style={{textAlign: "right"}}>
                    <div style={{display: "inline-block"}} className={"userDetails"}>
                        {(props.user === "Faculty") ?
                            currentFacultyDetails.facultyDetails.name :
                            currentStudentDetails.studentDetails.name}
                        <br/>
                        {(props.user === "Faculty") ?
                            currentFacultyDetails.facultyDetails.email :
                            currentStudentDetails.studentDetails.email}
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
                    <Row>
                        <Col>
                            <a href="">Artificial Intelligence</a>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <a href="">IPWT</a>
                        </Col>
                    </Row>
                </Col>
                <Col md={9} className="PendingQuizzesContainer">
                    <ClassComponent
                        user={props.user}
                        // classId={classIdSelected}
                    />
                </Col>
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

