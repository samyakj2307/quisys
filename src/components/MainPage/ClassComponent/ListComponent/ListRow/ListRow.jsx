import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Row } from "react-bootstrap";
import "./ListRow.css";
import TimerIcon from "@material-ui/icons/Timer";
import EventIcon from "@material-ui/icons/Event";
import ScheduleIcon from "@material-ui/icons/Schedule";
import { useHistory } from "react-router-dom";
import { FacultyQuizContext } from "../../../../../context/FacultyQuizContext";
import { FacultyQuestionContext } from "../../../../FacultyQuestionPaperPage/FacultyQuestionContext";
import { SelectedQuizContext } from "../../../../../context/SelectedQuizContext(Student)";
import { StudentQuestionAnswerContext } from "../../../../../context/StudentQuestionAnswerContext";
import { StudentAnswersheetContext } from "../../../../../context/StudentAnswersheetContext";
import { StudentDetailsContext } from "../../../../../context/StudentDetailsContext";
import { ExamStudentListContext } from "../../../../../context/ExamStudentListContext";

const axios = require("axios").default;

const baseUrl = "http://localhost:3000";

function ListRow(props) {
  const [quizDetails, setQuizDetails] = useContext(FacultyQuizContext);
  const [questions, setQuestions] = useContext(FacultyQuestionContext);

  const [currentQuizDetails, setCurrentQuizDetails] =
    useContext(SelectedQuizContext);

  const [questionAnswer, setQuestionAnswer] = useContext(
    StudentQuestionAnswerContext
  );

  const [studentAnswerSheet, setStudentAnswerSheet] = useContext(
    StudentAnswersheetContext
  );

  // Current Student Details
  const [currentStudentDetails, setCurrentStudentDetails] = useContext(
    StudentDetailsContext
  );

  const [examStudentDetails, setExamStudentDetails] = useContext(
    ExamStudentListContext
  );

  const history = useHistory();

  function handleEditQuiz() {
    axios
      .get(baseUrl + "/getExamQuestions", {
        params: { eid: props.examId },
      })
      .then(function (response) {
        console.log(response.data);
        setQuizDetails(response.data);
        setQuestions(quizDetails.allQuestions);
        history.push("/SetQuestionPaper", "Edit");
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function handleStartQuiz() {
    axios
      .get(baseUrl + "/getExamQuestions", {
        params: { eid: props.examId },
      })
      .then(function (response) {
        setCurrentQuizDetails(response.data);
        setQuestionAnswer(response.data.allQuestions);
        let studentAnswerSheet = [];
        for (let i = 0; i < response.data.allQuestions.length; i++) {
          const questions = response.data.allQuestions[i];
          questions.qid = questions._id;
          questions.answered = "";
          const {
            correctOption,
            _id,
            isText,
            textAnswer,
            options,
            ...currentQuestion
          } = questions;
          studentAnswerSheet = [...studentAnswerSheet, currentQuestion];
        }

        setStudentAnswerSheet({
          sid: currentStudentDetails._id,
          studentName: currentStudentDetails.name,
          studentEmail: currentStudentDetails.email,
          examName: props.examName,
          eid: props.examId,
          studentAnswerSheet: studentAnswerSheet,
        });
        history.push("/GiveExam");
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function handleViewMarks() {
    axios
      .get(baseUrl + "/getVerifiedResponses", {
        params: {
          eid: props.examId,
        },
      })
      .then(function (response) {
        console.log(response.data);
        let student = {};
        let index = 0;
        for (let i = 0; i < response.data.length; i++) {
          if (response.data[i].sid === currentStudentDetails._id) {
            student = response.data[i];
            index = i;
          }
        }
        history.push("/VerifyAnswers", {
          student: student,
          index: index,
          user: props.user,
        });
      });
  }

  function handleCheckPaper() {
    axios
      .get(baseUrl + "/getVerifiedResponses", {
        params: {
          eid: props.examId,
        },
      })
      .then(function (response) {
        console.log(response.data);
        for (let i = 0; i < response.data.length; i++) {
          if (response.data[i].totalMarks === undefined) {
            response.data[i]["totalMarks"] = 0;
            console.log("Inside if");
            console.log(response.data);
          }
        }
        setExamStudentDetails(response.data);
        history.push("/ExamStudentList", props.user);
      });
  }

  function isQuizOver() {
    let bool = false;
    for (let i = 0; i < currentStudentDetails.allExamsCompleted.length; i++) {
      if (props.examId === currentStudentDetails.allExamsCompleted[i]) {
        bool = true;
        break;
      }
    }
    return bool;
  }

  function checkTime() {
    const today = new Date();
    const dd = today.getDate();
    const mm = today.getMonth() + 1;
    const yyyy = today.getFullYear();

    const hours = today.getHours();
    const minutes = today.getMinutes();
    const seconds = today.getSeconds();

    var isDateSame = false;
    var isTimeInRange = false;

    var examDate = props.examDate.split("-");
    var examDateInt = [];
    for (let i = 0; i < examDate.length; i++) {
      examDateInt = [...examDateInt, parseInt(examDate[i])];
    }
    if (
      dd === examDateInt[2] &&
      mm === examDateInt[1] &&
      yyyy === examDateInt[0]
    ) {
      isDateSame = true;
    }

    var startTime = props.examStartTime.split(":");
    var startTimeInt = [];
    for (let i = 0; i < startTime.length; i++) {
      startTimeInt = [...startTimeInt, parseInt(startTime[i])];
    }

    var endTime = props.examEndTime.split(":");
    var endTimeInt = [];
    for (let i = 0; i < endTime.length; i++) {
      endTimeInt = [...endTimeInt, parseInt(endTime[i])];
    }

    if (
      hours >= startTimeInt[0] &&
      hours <= endTimeInt[0] &&
      minutes >= startTimeInt[1] &&
      minutes <= endTimeInt[1]
    ) {
      isTimeInRange = true;
    }

    if (isDateSame && isTimeInRange) {
      return (
        <button className={"ListComponentButton"} onClick={handleStartQuiz}>
          Start Quiz
        </button>
      );
    } else {
      return <h5>Not Yet Started</h5>;
    }
  }

  return (
    <div className={"listRowContainer"}>
      <Row>
        <Col md={4} className={"SubjectRowNames"}>
          {props.index + 1}. {props.examName}
        </Col>
        <Col md={5} className={"DateTime"}>
          <Row>
            <Col>
              <TimerIcon />
              {props.examDuration} Minutes
              <br />
              <EventIcon />
              {props.examDate}
            </Col>
            <Col>
              <ScheduleIcon />
              {props.examStartTime}-{props.examEndTime}
            </Col>
          </Row>
        </Col>
        <Col md={3} style={{ textAlign: "center" }}>
          {props.user === "Faculty" ? (
            <Col>
              {props.isCompleted ? (
                <button
                  className={"ListComponentButton"}
                  onClick={handleCheckPaper}
                >
                  Check Answers
                </button>
              ) : (
                <button
                  className={"ListComponentButton"}
                  onClick={handleEditQuiz}
                >
                  {" "}
                  Edit Quiz
                </button>
              )}
            </Col>
          ) : (
            <Col>
              {/*TODO Add Is Checked*/}
              {isQuizOver() ? (
                <button
                  className={"ListComponentButton"}
                  onClick={handleViewMarks}
                >
                  View Marks
                </button>
              ) : (
                checkTime()
              )}
            </Col>
          )}
        </Col>
      </Row>
    </div>
  );
}

export default ListRow;
