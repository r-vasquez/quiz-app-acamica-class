import { useContext, useEffect } from "react";
import "./App.css";
import Modal from "./components/Modal";
import QuizPage from "./components/QuizPage";
import { QuizContext } from "./context/QuizContext";

function App() {
  const { showQuiz, showModal, setModalContentBody } = useContext(QuizContext);

  useEffect(()=>{
    setModalContentBody(<InitModalContent />)
  }, [setModalContentBody])

  return (
    <div className="App-container">
      {showModal && <Modal />}

      <h1 className="App-title">Quiz App</h1>
      {showQuiz && <QuizPage />}
    </div>
  );
}

const InitModalContent = () => {
  const { setShowQuiz, setShowModal, numbQuestions, setInitTime } =
    useContext(QuizContext);

  const handleShowQuiz = () => {
    setShowQuiz(true);
    setShowModal(false);
    setInitTime(new Date());
  };

  return (
    <>
      <h3>Bienvenid@ al Quiz!</h3>
      <p>Les haremos {numbQuestions} preguntas</p>
      <p>¿Quieres empezar?</p>
      <button onClick={handleShowQuiz}>Arrancar Quiz</button>
    </>
  );
};

export default App;
