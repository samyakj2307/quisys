import React, {createContext, useState} from "react";

export const StudentContext = createContext();

export function StudentContextProvider(props) {
    const [studentDetails, setStudentDetails] = useState([
        {
            studentId: "jdslkjfsdklfjkl232odgjdfnvd",
            studentDetails: {
                name: "TempStudent",
                email: "temp.student@vitstudent.ac.in",
                password: "Temp@123"
            },
            classes: [
                {
                    classId: "fjsdlkfjsdlkfjflkjekljfslkfjs",
                    className: "Internet Programming and Web Technologies",
                    allExams: [
                        {
                            examId: "jsdklfsjdflksdj23849238fnsk",
                            examDetails: {
                                totalQuestions: 10,
                                attemptedQuestion: 5,
                                isChecked:false,
                                marksScored: 0,
                            },
                        },
                    ]
                }
            ]``
        }
    ])

    return <StudentContext.Provider value={[studentDetails, setStudentDetails]}>
        {props.children}
    </StudentContext.Provider>
}