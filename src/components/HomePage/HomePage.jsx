import React from "react";
import logo1 from "../../images/quisysLogo.png";
import './HomePage.css';
import '../LoginPage/LoginPage';
import {Container, Row, Col} from "react-bootstrap";
import LoginPage from "../LoginPage/LoginPage";
import {Link} from "react-router-dom";

function handleTeacherClick() {
    // ReactDOM.render(<LoginPage/>, );
}

function HomePage() {
    return (
        <div className={"backgroundDivision"}>
            <div className="mainDivision">
                <img src={logo1} alt="quisys Logo"/>
                <Container className={"buttonContainer"}>
                    <Row>
                        <Col>
                            <Link to={"/FacultyLogin"}>
                                <button className={"LoginPageButton"} type="submit" onClick={handleTeacherClick}>Login
                                    as Teacher
                                </button>
                            </Link>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <Link to={"/StudentLogin"}>
                                <button className={"LoginPageButton"} type="submit">Login as Student</button>
                            </Link>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default HomePage;