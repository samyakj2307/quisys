import React from "react";
import logo1 from "../../images/quisysLogo.png";
import './Page1.css';
import {Container, Row, Col} from "react-bootstrap";
import ReactDOM from "react-dom";
import App from "../../App";
import SignInBox from "../SignInBox";
import FacultyLogin from "../FacultyLogin/FacultyLogin";

function handleTeacherClick(){
    ReactDOM.render(<FacultyLogin/>, document.getElementById('root'));
}

function Page1() {
    return (
        <div className={"backgroundDivision"}>
            <div className="mainDivision">
                <img src={logo1} alt="quisys Logo"/>
                <Container className={"buttonContainer"}>
                    <Row>
                        <Col>
                            <button className={"LoginPageButton"} type="submit" onClick={handleTeacherClick}>Login as Teacher</button>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <button className={"LoginPageButton"} type="submit">Login as Student</button>

                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default Page1;