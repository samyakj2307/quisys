import React from 'react';
import './MainPage.css';
import {Col, Row, Container} from "react-bootstrap";
import Modal from 'react-bootstrap/Modal'
import quisysLogo from "../../images/quisysLogo.png";
import ListComp from "./ListComponent/ListComponent";

function MainPage() {

    function PopUp(props) {
        return (
            <Modal
                {...props}
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                animation={true}>
                <div style={{backgroundColor: "#E6EEF8"}}>
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Make a New Class
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body s className={"ModalBody"}>
                        <h5>Enter the Name of the Class:</h5>
                        <input className="PopUpNameField" type={"text"}/>
                    </Modal.Body>
                    <Modal.Footer>
                        <button onClick={props.onHide} className={"AddClassButton"}>Add Class</button>
                    </Modal.Footer>
                </div>
            </Modal>
        );
    }


    const [modalShow, setModalShow] = React.useState(false);

    function logout() {
        localStorage.clear();
        window.location.href = '/';
    }

    function addClass() {
        return setModalShow(true);
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
                            <button className={"CreateClass"} onClick={addClass}>Make a New Class</button>
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
            <PopUp
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </Container>

    );
}

export default MainPage;

