import React, { useContext } from "react";
import { QuizContext } from "../../context/QuizContext";
import { quizData } from "../../utils/data";
import AnswerButton from "../AnswerButton";
import "./quizPage.css";

function QuizPage() {
  const {
    questionNumber,
    setQuestionNumber,
    numbQuestions,
    disableNextBtn,
    setDisableNextBtn,
    setAnswerSelected,
    correctAnswers,
    initTime,
    setShowModal,
    setModalContentBody,
  } = useContext(QuizContext);
  const selectedQuestion = quizData[questionNumber];

  const handleNextQuestion = () => {
    setAnswerSelected(false);
    if (questionNumber < numbQuestions - 1) {
      setQuestionNumber(questionNumber + 1);
      setDisableNextBtn(true);
    } else {
      const finishTime = new Date();
      const totalTime = Math.round((finishTime - initTime) / 1000);
      const formattedTime = new Date(totalTime * 1000)
        .toISOString()
        .substr(11, 8);

      setModalContentBody(
        `Ya terminaste!, sacaste ${correctAnswers}/${numbQuestions} preguntas correctas\nDemoraste ${formattedTime}`
      );
      setShowModal(true);
    }
  };

  return (
    <div className="quizPage">
      <h3 className="quizPage-title">{selectedQuestion.questionTitle}</h3>
      <div className="quizPage-options">
        {selectedQuestion.options.map((option, key) => {
          const { text, isCorrect } = option;
          return (
            <AnswerButton text={text} isCorrect={isCorrect} key={key + text} />
          );
        })}
      </div>
      <button
        className="quizPage_next-button"
        onClick={handleNextQuestion}
        disabled={disableNextBtn}
      >
        Siguiente
      </button>
    </div>
  );
}

export default QuizPage;
