import React from "react";
import './InputBox.css';

function InputBox(props) {
    return (
        <div className={"divInput"}>
            <input className={"inputField"} type={props.inputType} placeholder={props.placeholderText}/>
        </div>
    );
}

export default InputBox;