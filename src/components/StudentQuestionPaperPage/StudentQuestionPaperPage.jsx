import React, {Component} from 'react';
import './StudentQuestionPaperPage.css';
import Question from './QuestionBox/QuestionBox';
import Answer from './AnswerBox/AnswerBox';
export default class Quiz extends Component {
    // initializing the local state
    state = {
        questions: {
            1: 'FULL FORM OF HTML ?',
            2: 'FULL FORM OF EMAIL ?',
            3: 'FULL FORM OF RAM ?'
        },
        answers: {
            1: {
                1: 'HyperText Markup Lang',
                2: 'kjbiwd',
                3: 'qwerty'
            },
            2: {
                1: 'Electronic Mail',
                2: 'kjbiwd',
                3: 'qwerty'
            },
            3: {
                1: 'Random Access Memory',
                2: 'kjbiwd',
                3: 'qwerty'
            }
        },
        correctAnswers: {
            1: '1',
            2: '1',
            3: '1'
        },
        correctAnswer: 0,
        clickedAnswer: 0,
        step: 1,
        score:0
    }

    checkAnswer = answer => {
        const {correctAnswers, step, score} = this.state;
        if(answer === correctAnswers[step]){
            this.setState({
                score: score+1,
                correctAnswer:correctAnswers[step],
                clickedAnswer:answer
            });
        }else{
            this.setState({
                correctAnswer:0,
                clickedAnswer:answer
            })
        }
    }

    nextStep = step => {
        this.setState({
            step: step+1,
            correctAnswer: 0,
            clickedAnswer:0
        });
    }
    render(){
        let {questions,answers,clickedAnswer,correctAnswer,step, score} = this.state;
        return(
            <div className="Content">
                { step <= Object.keys(questions).length ?
                    (<>
                        <Question
                            question={questions[step]}
                        />
                        <Answer
                            answer={answers[step]}
                            step={step}
                            checkAnswer={this.checkAnswer}
                            correctAnswer={correctAnswer}
                            clickedAnswer={clickedAnswer}
                        />
                        <button
                            className="NextStep"
                            onClick={() => this.nextStep(step)}
                        >
                            Next
                        </button>
                    </>) : (
                        <div className="finalPage">
                            <h2>THANK YOU FOR ATTENDING!</h2>
                            <p>YOUR SCORE IS: {score}/{Object.keys(questions).length}</p>
                            <button className="homePage">Return to Home Page</button>
                        </div>
                    )
                }
            </div>
        );
    }
}
