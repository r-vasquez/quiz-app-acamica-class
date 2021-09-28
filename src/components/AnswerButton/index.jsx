import React, { useContext } from 'react'
import { QuizContext } from '../../context/QuizContext'

function AnswerButton({text, isCorrect}) {

    const {setDisableNextBtn} = useContext(QuizContext)

    const handleAnswerClick = () => {
        if (isCorrect) {
            alert("Respuesta Correcta!")
        } else {
            alert("Incorrecto!") 
        }
        setDisableNextBtn(false)
    }
    return (
        <button onClick={handleAnswerClick}>{text}</button>
    )
}

export default AnswerButton
