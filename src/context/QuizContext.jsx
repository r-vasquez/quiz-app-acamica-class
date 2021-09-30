import { createContext, useState } from "react";
import { quizData } from "../utils/data";

export const QuizContext = createContext();

export const QuizProvider = (props) => {
  const [showQuiz, setShowQuiz] = useState(false);
  const [showModal, setShowModal] = useState(true);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [disableNextBtn, setDisableNextBtn] = useState(true);
  const [answerSelected, setAnswerSelected] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [initTime, setInitTime] = useState();
  const [modalContentBody, setModalContentBody] = useState();

  const quizValues = {
    showQuiz,
    setShowQuiz,
    showModal,
    setShowModal,
    numbQuestions: quizData.length,
    questionNumber,
    setQuestionNumber,
    disableNextBtn,
    setDisableNextBtn,
    answerSelected,
    setAnswerSelected,
    correctAnswers,
    setCorrectAnswers,
    initTime,
    setInitTime,
    modalContentBody,
    setModalContentBody,
  };

  return (
    <QuizContext.Provider value={quizValues}>
      {props.children}
    </QuizContext.Provider>
  );
};
