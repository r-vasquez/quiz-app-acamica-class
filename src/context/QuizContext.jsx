import { createContext, useState } from "react";
import { quizData } from "../utils/data";

export const QuizContext = createContext();

export const QuizProvider = (props) => {
    const [showQuiz, setShowQuiz] = useState(false);
    const [showModal, setShowModal] = useState(true);
    const [questionNumber, setQuestionNumber] = useState(0);
    const [disableNextBtn, setDisableNextBtn] = useState(true)

    const quizValues = {
        showQuiz,
        setShowQuiz,
        showModal,
        setShowModal,
        numbQuestions: quizData.length,
        questionNumber,
        setQuestionNumber,
        disableNextBtn,
        setDisableNextBtn
    }
    
    return (
        <QuizContext.Provider value={quizValues}>
            {props.children}
        </QuizContext.Provider>
    )
}