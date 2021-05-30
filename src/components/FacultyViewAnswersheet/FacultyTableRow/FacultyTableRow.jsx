import React, {useContext, useState} from "react";

function FacultyTableRow(props){
    console.log(props)
    function verifyAnswers(){
       const VA=props.student.studentAnswerSheet
        console.log(VA)
    }
     return(
         <tr>
             <td>{props.student.studentName}</td>
             <td>{props.student.studentEmail}</td>
             <td>Not Awarded</td>
             {/*<td>{studentsList.studentAnswerSheet.marks!== undefined ? studentsList.marks : "Not Awarded Yet." }</td>*/}
             <td>
                 <button className={"checkBtn"}>Check Paper</button>
             </td>
         </tr>
     )
}

export default FacultyTableRow;