import React, {useContext, useState} from "react";
import {Col, ProgressBar, Row} from "react-bootstrap";
import "./Timer.css"
import {SelectedQuizContext} from "../../../context/SelectedQuizContext(Student)";
import {useHistory} from "react-router-dom";

function Timer(props) {

    const [currentQuizDetails, setCurrentQuizDetails] = useContext(SelectedQuizContext)


    const [timer, setTimer] = useState(currentQuizDetails.duration * 60);
    const [second, setSecond] = useState((currentQuizDetails.duration * 60) % 60);
    const [minute, setMinute] = useState(Math.floor((currentQuizDetails.duration * 60) / 60));
    const [progress, setProgress] = useState(0);
    const id = React.useRef(null);

    const history = useHistory();

    const clear = () => {
        window.clearInterval(id.current);
    };
    React.useEffect(() => {
        id.current = window.setInterval(() => {
            const time = timer - 1

            const secondCounter = time % 60;
            const minuteCounter = Math.floor(time / 60);
            let computedSecond =
                (String(secondCounter).length === 1)
                    ? `0${secondCounter}`
                    : secondCounter;
            let computedMinute =
                (String(minuteCounter).length === 1)
                    ? `0${minuteCounter}`
                    : minuteCounter;


            setTimer(time);
            setProgress(prevState => prevState + 1)
            setSecond(computedSecond);
            setMinute(computedMinute);

        }, 1000);
        return () => clear();
    }, [timer]);

    React.useEffect(() => {

        if (timer === 0) {
            clear();
            props.handleSubmitAction();
        }
    }, [props, timer]);

    return (
        <Col>
            <Row>
                <Col className={"labelStyle"}>
                    {minute + ":" + second}
                </Col>
            </Row>
            <Row>
                <Col>
                    <ProgressBar
                        className={"progressStyle"}
                        now={(progress * 100) / (currentQuizDetails.duration * 60)}/>
                </Col>
            </Row>
        </Col>

    )

}

export default Timer;