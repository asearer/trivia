import React from 'react';

const GameOver = ({ score }) => {
  return (
    <div>
      <h1>Game Over!</h1>
      <p>Your Score: {score}</p>
    </div>
  );
};

export default GameOver;
