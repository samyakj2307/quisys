import Modal from "react-bootstrap/Modal";
import React from "react";
import "./PopUp.css";

function PopUp(props) {
    return (
        <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            animation={true}>
            <div className={"popUpBoxContainer"}>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        {props.user==="Faculty" ? "Make " : "Join "}a New Class
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className={"ModalBody"}>
                    <h5>Enter the {props.user==="Faculty"?"Name":"Link"} for the Class:</h5>
                    <input className="PopUpNameField" type={"text"}/>
                </Modal.Body>
                <Modal.Footer>
                    <button onClick={props.onHide} className={"AddClassButton"}>{props.user==="Faculty"?"Add Class":"Join Class"}</button>
                </Modal.Footer>
            </div>
        </Modal>
    );
}

export default PopUp;