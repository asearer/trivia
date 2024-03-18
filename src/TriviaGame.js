import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Scoreboard from './components/Scoreboard';

const fetchQuestions = async () => {
  const response = await fetch('https://opentdb.com/api.php?amount=10');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await response.json();
  // Ensure the data is in the correct format
  return data.results.map(question => ({
    ...question,
    options: [...question.incorrect_answers, question.correct_answer],
  }));
};

const TriviaGame = () => {
  const { data, isLoading, isError } = useQuery('questions', fetchQuestions);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [answered, setAnswered] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswer = () => {
    let newScore = score;
    if (selectedAnswer === data[currentQuestionIndex].correct_answer) {
      newScore += 1;
    }
    setScore(newScore);
    setAnswered(true);

    // Move to the next question
    if (currentQuestionIndex < data.length - 1) {
      setTimeout(() => {
        setCurrentQuestionIndex(prevIndex => prevIndex + 1);
        setSelectedAnswer('');
        setAnswered(false);
      }, 1000); // Delay for 1 second before loading the next question
    }
  };

  return (
    <div>
      <h2>Trivia Question</h2>
      <Scoreboard score={score} />
      {isLoading && <div>Loading...</div>}
      {isError && <div>Error fetching data</div>}
      {data && (
        <div>
          <p>Question {currentQuestionIndex + 1} of {data.length}</p>
          <h3>{data[currentQuestionIndex].question}</h3>
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
                <label htmlFor={`option${index}`}>{option}</label>
              </div>
            ))}
          </div>
          {!answered && (
            <button onClick={handleAnswer}>Submit Answer</button>
          )}
        </div>
      )}
    </div>
  );
};

export default TriviaGame;
