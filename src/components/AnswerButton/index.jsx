import React, { useContext } from "react";
import { useState } from "react/cjs/react.development";
import { QuizContext } from "../../context/QuizContext";
import "./answerButton.css";

function AnswerButton({ text, isCorrect }) {
  const { setDisableNextBtn, answerSelected, setAnswerSelected, setCorrectAnswers } = useContext(QuizContext);
  const [clicked, setClicked] = useState(false);

  const handleAnswerClick = () => {
    setClicked(true);
    setAnswerSelected(true);
    setDisableNextBtn(false);
    if (isCorrect) {
      setCorrectAnswers(prevState => prevState + 1)
    } 
  };

  const clickedClass = isCorrect ? "correct" : "wrong";

  return (
    <button
      onClick={handleAnswerClick}
      className={`answer-button ${clicked ? clickedClass : ""}`}
      disabled={answerSelected}
    >
      {text}
    </button>
  );
}

export default AnswerButton;
