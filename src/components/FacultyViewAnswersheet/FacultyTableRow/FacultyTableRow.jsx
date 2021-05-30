import React, {useContext, useState} from "react";

function FacultyTableRow(props){
     return(
         <tr>
             <td>{props.name}</td>
             <td>{props.email}</td>
             <td>{props.marks}</td>
             <td>
                 <button className={"checkBtn"}>Check Paper</button>
             </td>
         </tr>
     )

}

export default FacultyTableRow;