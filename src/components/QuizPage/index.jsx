import React, { useContext } from "react";
import { QuizContext } from "../../context/QuizContext";
import { quizData } from "../../utils/data";
import AnswerButton from "../AnswerButton";
import "./quizPage.css";

function QuizPage() {
  const { questionNumber, setQuestionNumber, numbQuestions, disableNextBtn, setDisableNextBtn } = useContext(QuizContext);
  const selectedQuestion = quizData[questionNumber];

  const handleNextQuestion = () => {
    if(questionNumber < numbQuestions - 1) {
      setQuestionNumber(questionNumber + 1);
      setDisableNextBtn(true)
    } else {
      alert("Ya terminaste!")
    }
  };

  return (
    <div className="quizPage">
      <h3 className="quizPage-title">{selectedQuestion.questionTitle}</h3>
      <div className="quizPage-options">
        {selectedQuestion.options.map((option) => {
          const { text, isCorrect } = option;
          return <AnswerButton text={text} isCorrect={isCorrect} />;
        })}
      </div>
      <button className="quizPage_next-button" onClick={handleNextQuestion} disabled={disableNextBtn}>
        Siguiente
      </button>
    </div>
  );
}

export default QuizPage;
