import React from 'react';
import './Scoreboard.css'; // Import stylesheet for Scoreboard

const Scoreboard = ({ score }) => {
  return (
    <div className="scoreboard-container">
      <h2 className="scoreboard-title">Scoreboard</h2>
      <div className="scoreboard-content">
        <p>Score: {score}</p>
        {/* Add more elements like high score, level, etc. if needed */}
      </div>
    </div>
  );
};

export default Scoreboard;
