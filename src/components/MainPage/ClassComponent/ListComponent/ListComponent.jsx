import React from "react";
import "./ListComponent.css"

import 'bootstrap/dist/css/bootstrap.min.css';
import ListRow from "./ListRow/ListRow";

function ListComponent(props) {

    const QuestionDetails = [
        {
            facultyDetails: {
                name: "TempFaculty",
                email: "tempfaculty@vit.ac.in",
                password: "12345678"
            },
            examDetails: [
                {
                    Details: {
                        examName: "Internet Programming and Web Technologies",
                        duration: 30,
                        date: "2017-06-01",
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
                                options: []
                            }
                        }
                    ]
                },
                {
                    Details: {
                        examName: "Artificial Intelligence",
                        duration: 30,
                        date: "2017-06-01",
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
                                options: []
                            }
                        }
                    ]
                },
                {
                    Details: {
                        examName: "Natural Language Processing",
                        duration: 30,
                        date: "2017-06-01",
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
                                options: []
                            }
                        }
                    ]
                }
            ]
        }
    ];

    return (
        <div className={"listComponentContainer"}>
            {QuestionDetails[0].examDetails.map((questionItem, index) => {
                return (
                    <ListRow
                        key={index}
                        index={index}
                        examName={questionItem.Details.examName}
                        examDuration={questionItem.Details.duration}
                        examStartTime={questionItem.Details.startTime}
                        examEndTime={questionItem.Details.endTime}
                        examDate={questionItem.Details.date}
                        user={props.user}/>
                );
            })}
        </div>
    );
}

export default ListComponent;