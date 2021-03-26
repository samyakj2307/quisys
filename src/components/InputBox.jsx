import React from "react";
import './SignInBox.css';

function InputBox(props) {
    return (
        <div>
            <input className={"inputField"} type={props.inputType} placeholder={props.placeholderText}/>
        </div>
    );
}

export default InputBox;