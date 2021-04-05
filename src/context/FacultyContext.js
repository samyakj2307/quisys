import React, {createContext, useState} from "react";

export const FacultyContext = createContext();

export function FacultyContextProvider(props) {
    const [details, setDetails] = useState([
        {
            facultyId: "jdslkjfsdklfjkl232odgjdfnvd",
            facultyDetails: {
                name: "TempFaculty",
                email: "tempfaculty@vit.ac.in",
                password: "12345678"
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
                            allQuestions: [
                                {
                                    id: "4c7cccb1-5f87-4bsd-ae73-cf73dfc6e04`f",
                                    value: {
                                        question: "",
                                        isText: false,
                                        textAnswer: "",
                                        options: [
                                            {
                                                id: "nsfksjf3wr34u3",
                                                value: "Sambhav"
                                            }
                                        ]
                                    }
                                }
                            ]
                        },
                    ]
                }
            ]
        }
    ])


    return <FacultyContext.Provider value={[details, setDetails]}>
        {props.children}
    </FacultyContext.Provider>

}