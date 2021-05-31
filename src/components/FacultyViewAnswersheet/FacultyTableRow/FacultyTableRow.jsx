import React from "react";
import { useHistory } from "react-router-dom";

function FacultyTableRow(props) {
  const history = useHistory();

  function handleVerifyAnswers() {
    for (let i = 0; i < props.student.studentAnswerSheet.length; i++) {
      if (props.student.studentAnswerSheet[i]["marksAwarded"] === undefined) {
        props.student.studentAnswerSheet[i]["marksAwarded"] = 0;
      }
    }
    history.push("/VerifyAnswers", {
      student: props.student,
      index: props.index,
      user: props.user,
    });
  }

  return (
    <tr>
      <td>{props.student.studentName}</td>
      <td>{props.student.studentEmail}</td>
      <td>
        {props.student.totalMarks === undefined
          ? "Not Awarded"
          : props.student.totalMarks}
      </td>
      <td>
        <button className={"checkBtn"} onClick={handleVerifyAnswers}>
          Check Paper
        </button>
      </td>
    </tr>
  );
}

export default FacultyTableRow;
