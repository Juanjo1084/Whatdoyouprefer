import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import "../styles/questions.css";

function Questions({ questions }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [esquizofreniaTotal, setEsquizofreniaTotal] = useState(0);
  const [razonableTotal, setRazonableTotal] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const navigate = useNavigate();

  const handleAnswer = (esquizofrenia, razonable) => {
    setEsquizofreniaTotal((prev) => prev + esquizofrenia);
    setRazonableTotal((prev) => prev + razonable);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  return (
    <div className="questions">
      <div className="questions-container">
        {!showResults ? (
          <div className="question-card">
            <h2 className="question-title">
              {currentQuestion + 1}. {questions[currentQuestion].question}
            </h2>
            <div className="options-container">
              {questions[currentQuestion].options.map((option, i) => (
                <div key={i} className="option">
                  <img
                    src={option.image}
                    alt={option.text}
                    className="option-image"
                  />
                  <button
                    className="option-button"
                    onClick={() =>
                      handleAnswer(option.esquizofrenia, option.razonable)
                    }
                  >
                    {option.text}
                  </button>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="results">
            <h3>Resultados finales</h3>
            <p className="esquizofrenia">
              Esquizofrenia: {esquizofreniaTotal}%
            </p>
            <p className="razonable">Razonable: {razonableTotal}%</p>
            <p className="final-message">
              {esquizofreniaTotal > razonableTotal
                ? "Tus respuestas reflejan un lado más caótico y creativo, aunque la razón no te abandona del todo."
                : "Tus respuestas son bastante razonables y lógicas aunque tienes un poco de locura."}
            </p>
            <div className="home">
              <button onClick={() => navigate("/")}>Volver al Inicio</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Questions;
