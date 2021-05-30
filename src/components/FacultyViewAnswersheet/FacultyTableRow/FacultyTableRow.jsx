import React from "react";
import {useHistory} from "react-router-dom";

function FacultyTableRow(props) {

    const history = useHistory();

    function handleVerifyAnswers() {
        history.push("/VerifyAnswers", {student:props.student,index:props.index})
    }

    return (
        <tr>
            <td>{props.student.studentName}</td>
            <td>{props.student.studentEmail}</td>
            <td>{props.student.totalMarks === undefined ? "Not Awarded" : props.student.totalMarks}</td>
            {/*<td>{studentsList.studentAnswerSheet.marks!== undefined ? studentsList.marks : "Not Awarded Yet." }</td>*/}
            <td>
                <button className={"checkBtn"} onClick={handleVerifyAnswers}>Check Paper</button>
            </td>
        </tr>
    )
}

export default FacultyTableRow;