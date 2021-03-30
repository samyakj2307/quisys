import React from "react";
import logo1 from "../../images/quisysLogo.png";
import './HomePage.css';
import '../SignInPage/SignInPage';
import {Container, Row, Col} from "react-bootstrap";
import {Link} from "react-router-dom";


function HomePage() {
    return (
        <div className={"backgroundDivisionHomePage"}>
            <div className="mainDivisionHomePage">
                <img src={logo1} alt="quisys Logo" height={111} width={300}/>
                <Container className={"buttonContainerHomePage"}>
                    <Row>
                        <Col>
                            <Link to={"/FacultyLogin"}>
                                <button className={"HomePageButton"} type="submit">Login as Teacher</button>
                            </Link>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <Link to={"/StudentLogin"}>
                                <button className={"HomePageButton"} type="submit">Login as Student</button>
                            </Link>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default HomePage;