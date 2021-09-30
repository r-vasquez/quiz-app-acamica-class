import React, { useContext } from "react";
import { QuizContext } from "../../context/QuizContext";
import "./modal.css";

function Modal() {
  const {modalContentBody} = useContext(QuizContext);

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-content__body">
          {modalContentBody}
        </div>
      </div>
    </div>
  );
}

export default Modal;
