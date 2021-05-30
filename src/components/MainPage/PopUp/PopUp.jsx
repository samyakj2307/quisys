import Modal from "react-bootstrap/Modal";
import React, {useContext, useState} from "react";
import "./PopUp.css";
import "../../../index.css";
import {FacultyDetailsContext} from "../../../context/FacultyDetailsContext";
import {ClassListContext} from "../../../context/ClassListContext";
import {StudentDetailsContext} from "../../../context/StudentDetailsContext";

const axios = require("axios").default;

const baseUrl = "http://localhost:3000";

function PopUp(props) {

    const [currentFacultyDetails, setCurrentFacultyDetails] = useContext(FacultyDetailsContext);
    const [currentStudentDetails, setCurrentStudentDetails] = useContext(StudentDetailsContext);

    const [classDetails, setClassDetails] = useContext(ClassListContext);

    const [IsValid, setIsValid] = React.useState(true);

    const [input, setInput] = useState("");

    function handleClick() {
        if (input !== "") {
            if (props.user === "Faculty") {
                axios
                    .post(baseUrl + "/facultyAddClass", {
                        fid: currentFacultyDetails._id,
                        className: input,
                    })
                    .then(function (response) {
                        console.log(response.data);
                        const newClass = {_id: response.data, className: input}
                        const newClassList = [...classDetails, newClass]
                        setClassDetails(newClassList)
                        props.onHide();
                    })
                    .catch(function (error) {
                        console.log(error);
                    });

            } else {

                axios
                    .post(baseUrl + "/studentAddClass", {
                        sid: currentStudentDetails._id,
                        cid: input
                    })
                    .then(function (response) {
                        console.log(response);
                        const newClassList = [...classDetails, response.data]
                        setClassDetails(newClassList)
                        props.onHide();
                    })
                    .catch(function (error) {
                        console.log(error.response);
                    });

                //TODO Check for Invalid Class ID Case and make the Text Box Red
            }
            setInput("");

        }
    }

    function handleChange(event) {
        const value = event.target.value;
        setInput(value);
    }

    return (
        <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            animation={true}
        >
            <div className={"popUpBoxContainer"}>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        {props.user === "Faculty" ? "Make " : "Join "}a New Class
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className={"ModalBody"}>
                    <h5>
                        Enter the {props.user === "Faculty" ? "Name" : "Link"} for the
                        Class:
                    </h5>
                    <input
                        id="classInputField"
                        className="PopUpNameField errorField"
                        type={"text"}
                        value={input}
                        onChange={handleChange}
                    />
                </Modal.Body>
                <Modal.Footer>
                    <button
                        id="classButtonId"
                        onClick={handleClick}
                        className={"AddClassButton"}
                    >
                        {props.user === "Faculty" ? "Add Class" : "Join Class"}
                    </button>
                </Modal.Footer>
            </div>
        </Modal>
    );
}

export default PopUp;
