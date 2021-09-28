import { useContext } from "react";
import "./App.css";
import Modal from "./components/Modal";
import QuizPage from "./components/QuizPage";
import { QuizContext } from "./context/QuizContext";

function App() {
  const { showQuiz, showModal } = useContext(QuizContext);

  return (
    <div className="App-container">
      {showModal && <Modal />}
      <h1 className="App-title">Quiz App</h1>
      {showQuiz && <QuizPage />}
    </div>
  );
}

export default App;
