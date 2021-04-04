import React from 'react';
import './MainPage.css';
import {Col, Container, Row} from "react-bootstrap";
import quisysLogo from "../../images/quisysLogo.png";
import ListComp from "./ListComponent/ListComponent";

function MainPage() {

    function logout() {
        localStorage.clear();
        window.location.href = '/';
    }

    return (
        <Container className={"Container1"}>
            <Row className={"NavBarContainer"}>
                <Col className={"LogoContainer"}>
                    <img className={"quisysLogo"} src={quisysLogo}/>
                </Col>
                <Col>
                    <p className={"CourseName"}>IPWT</p>
                </Col>
                <Col>
                    <Row>
                        <Col className={"userDetails"}>
                            <p>Temp Faculty <br/> temp.faculty@vitstudent.ac.in</p>
                        </Col>
                        <Col>
                            <button onClick={logout} className={"LogoutBtn"}>Logout</button>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row className={"secondContainer"}>
                <Col md={3} className={"joinClassContainer"}>
                    <Row>
                        <Col>
                            <button className={"JoinClass"}>Make a New Class</button>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h4 className={"AllClass"}>All Classes</h4>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <a href="" className={"AiClass"}>Artificial Intelligence</a>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <a href="" className={"IPWTClass"}>IPWT</a>
                        </Col>
                    </Row>
                </Col>
                <Col md={9} className="PendingQuizzesContainer">
                    <h4>Scheduled Quizzes</h4>
                    <ListComp/>
                </Col>
            </Row>
        </Container>

    );
}

export default MainPage;

