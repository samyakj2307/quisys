import React, {createContext, useState} from "react";

export const CurrentStudentContext = createContext();

export function CurrentStudentContextProvider(props) {
    const [currentStudentDetails, setCurrentStudentDetails] = useState(
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
                            isAttempted: false,
                            afterAttemptingDetails: {
                                attemptDetails: {
                                    totalQuestions: 10,
                                    attemptedQuestion: 5,
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
                            isChecked: false,
                            afterCheckingDetails: {
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
    )


    return <CurrentStudentContext.Provider value={[currentStudentDetails, setCurrentStudentDetails]}>
        {props.children}
    </CurrentStudentContext.Provider>

}