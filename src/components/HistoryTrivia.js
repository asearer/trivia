import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Scoreboard from './Scoreboard';
import HtmlDecode from './HtmlDecode';
import './HistoryTrivia.css'; // Import the CSS file for HistoryTrivia

const fetchHistoryQuestions = async () => {
  const apiUrl = 'https://opentdb.com/api.php?amount=10&category=23';

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    // Check if data.results exists before mapping over it
    if (data.results) {
      return data.results.map(question => ({
        ...question,
        options: [...question.incorrect_answers, question.correct_answer],
      }));
    } else {
      throw new Error('Data format error: results field missing');
    }
  } catch (error) {
    console.error('Error fetching history questions:', error);
    throw error; // Rethrow the error to be caught by the caller
  }
};

const HistoryTrivia = () => {
  const { data, isLoading, isError } = useQuery('historyQuestions', fetchHistoryQuestions);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [answered, setAnswered] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswer = () => {
    if (selectedAnswer === data[currentQuestionIndex]?.correct_answer) {
      setScore(prevScore => prevScore + 1);
    }
    setAnswered(true);
  };

  const handleNextQuestion = () => {
    if (data && currentQuestionIndex < data.length - 1) {
      setCurrentQuestionIndex(prevIndex => prevIndex + 1);
      setSelectedAnswer('');
      setAnswered(false);
    }
  };

  return (
    <div className="history-trivia-container">
      <h2 className="history-trivia-title">History Trivia</h2>
      <Scoreboard score={score} />
      {isLoading && <div>Loading...</div>}
      {isError && <div>Error fetching data</div>}
      {data && data[currentQuestionIndex] && (
        <div>
          <p>
            Question {currentQuestionIndex + 1} of {data.length}
          </p>
          <h3><HtmlDecode content={data[currentQuestionIndex].question} /></h3>
          <div>
            {data[currentQuestionIndex].options.map((option, index) => (
              <div key={index}>
                <input
                  type="radio"
                  id={`option${index}`}
                  name="answer"
                  value={option}
                  checked={selectedAnswer === option}
                  onChange={() => setSelectedAnswer(option)}
                />
                <label htmlFor={`option${index}`}><HtmlDecode content={option} /></label>
              </div>
            ))}
          </div>
          {!answered && (
            <button onClick={handleAnswer}>Submit</button>
          )}
          {answered && currentQuestionIndex < data.length - 1 && (
            <button onClick={handleNextQuestion}>Next Question</button>
          )}
        </div>
      )}
    </div>
  );
};

export default HistoryTrivia;
