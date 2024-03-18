import React from 'react';

const Options = ({ options, selectedOption, handleOptionSelect }) => {
  return (
    <form>
      {options.map((option, index) => (
        <div key={index}>
          <input
            type="radio"
            id={option}
            name="option"
            value={option}
            checked={selectedOption === option}
            onChange={() => handleOptionSelect(option)}
          />
          <label htmlFor={option}>{option}</label>
        </div>
      ))}
    </form>
  );
};

export default Options;
