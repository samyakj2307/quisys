import React, {createContext, useState} from "react";

export const StudentQuestionAnswerContext = createContext();

export function QuestionAnswerProvider(props) {
    const [questionAnswer, setQuestionAnswer] = useState([
        // {
        //     //TODO Add StudentID at the End
        //     question: "",
        //     isText: false,
        //     textAnswer: "",
        //     options: [],
        //     optionSelected: ""
        // },
        {
            question: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
            isText: false,
            options: [ 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,', 'It was popularised in the 1960s with the release of Letraset sheets containing', 'Scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. '],
            textAnswer: "",
            optionSelected: ""
        },
        {
            question: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
            isText: false,
            options: [ 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,', 'It was popularised in the 1960s with the release of Letraset sheets containing', 'Scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. '],
            textAnswer: "",
            optionSelected: ""
        },
        {
            question: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
            isText: false,
            options: [ 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,', 'It was popularised in the 1960s with the release of Letraset sheets containing', 'Scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. '],
            textAnswer: "",
            optionSelected: ""
        },
        {
            question: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
            isText: false,
            options: [ 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,', 'It was popularised in the 1960s with the release of Letraset sheets containing', 'Scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. '],
            textAnswer: "",
            optionSelected: ""
        },
        {
            question: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
            isText: false,
            options: [ 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,', 'It was popularised in the 1960s with the release of Letraset sheets containing', 'Scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. '],
            textAnswer: "",
            optionSelected: ""
        },
        {
            question: "FULL FORM OF EMAIL ?",
            isText: true,
            options: ['Electronic Mail', 'Akkad Bakkad Bambe Booo', 'qwerty'],
            textAnswer: "",
            optionSelected: ""

        },
        {
            question: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
            isText: false,
            options: [ 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,', 'It was popularised in the 1960s with the release of Letraset sheets containing', 'Scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. '],
            textAnswer: "",
            optionSelected: ""
        },
        {
            question: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
            isText: false,
            options: [ 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,', 'It was popularised in the 1960s with the release of Letraset sheets containing', 'Scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. '],
            textAnswer: "",
            optionSelected: ""
        },
        {
            question: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
            isText: false,
            options: [ 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,', 'It was popularised in the 1960s with the release of Letraset sheets containing', 'Scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. '],
            textAnswer: "",
            optionSelected: ""
        },
        {
            question: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
            isText: false,
            options: [ 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,', 'It was popularised in the 1960s with the release of Letraset sheets containing', 'Scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. '],
            textAnswer: "",
            optionSelected: ""
        },

        {
            question: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
            isText: false,
            options: ['Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,', 'It was popularised in the 1960s with the release of Letraset sheets containing', 'Scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. '],
            textAnswer: "",
            optionSelected: ""
        },
        {
            question: "FULL FORM OF RAM ?",
            isText: false,
            options: ['Random Access Memory', 'Akkad Bakkad Bambe Booo', 'qwerty'],
            textAnswer: "",
            optionSelected: ""
        }
    ]);

    return (<StudentQuestionAnswerContext.Provider value={[questionAnswer, setQuestionAnswer]}>
        {props.children}
    </StudentQuestionAnswerContext.Provider>);

}