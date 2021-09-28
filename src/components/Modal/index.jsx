import React, { useContext } from "react";
import { QuizContext } from "../../context/QuizContext";
import "./modal.css";

function Modal() {
  const { setShowQuiz, setShowModal, numbQuestions } = useContext(QuizContext);

  const handleShowQuiz = () => {
    setShowQuiz(true);
    setShowModal(false);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-content__body">
          <h3>Bienvenid@ al Quiz!</h3>
          <p>Les haremos {numbQuestions} preguntas</p>
          <p>¿Quieres empezar?</p>
          <button onClick={handleShowQuiz}>Arrancar Quiz</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
