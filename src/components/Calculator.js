import React, { useState } from 'react';
import Button from './Button';
import './Calculator.css';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    if (value === '=') {
      try {
        setResult(eval(input));
      } catch {
        setResult('Error');
      }
    } else if (value === 'C') {
      setInput('');
      setResult('');
    } else if (value === '←') {
      setInput(input.slice(0, -1));
    } else {
      setInput(input + value);
    }
  };

  return (
    <div className="calculator">
      <div className="display">
        <div className="input">{input || ''}</div>
        <div className="result">{result || ''}</div>
      </div>
      <div className="buttons">
        {['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '=', '+'].map((value) => (
          <Button key={value} onClick={() => handleClick(value)}>
            {value}
          </Button>
        ))}
        <Button className="clear" onClick={() => handleClick('C')}>C</Button>
        <Button className="backspace" onClick={() => handleClick('←')}>←</Button>
      </div>
    </div>
  );
};

export default Calculator;
