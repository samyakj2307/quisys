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
                                examName: "IPWT Quiz-1",
                                duration: 30,
                                date: "2021-06-01",
                                startTime: "05:00",
                                endTime: "06:00",

                            },
                            afterAttemptingDetails: {
                                attemptDetails: {
                                    totalQuestions: 10,
                                    attemptedQuestion: 5,
                                    isChecked: false,
                                },
                                allAttemptedQuestions: [
                                    {
                                        questionId: "4c7cccb1-5f87-4bsd-ae73-cf73dfc6e04`f",
                                        value: {
                                            textAnswer: "",
                                            optionSelected: {optionId: "nsfksjf3wr34u3"}
                                        }
                                    }
                                ]
                            },
                            afterCheckingDetails:{
                                totalMarksScored: 0,
                                attemptedQuestions: [
                                    {
                                        questionId: "4c7cccb1-5f87-4bsd-ae73-cf73dfc6e04`f",
                                        value: {
                                            textAnswer: "",
                                            optionSelected: {optionId: "nsfksjf3wr34u3"}
                                        }
                                    }
                                ]
                            }
                        },
                    ]
                }
            ]
        }
    ])

    return <StudentContext.Provider value={[studentDetails, setStudentDetails]}>
        {props.children}
    </StudentContext.Provider>
}