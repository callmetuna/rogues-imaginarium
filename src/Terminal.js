import React, { useState } from 'react';

const Terminal = () => {
  const [text, setText] = useState('');
  const [history, setHistory] = useState([]);

  const handleInput = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setHistory([...history, text]);
    // Send user input to backend and receive response (to be implemented)
    setText('');
  };

  return (
    <div className="terminal">
      <div className="history">
        {history.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>
      <input
        type="text"
        value={text}
        onChange={handleInput}
        onKeyDown={(event) => event.key === 'Enter' && handleSubmit(event)}
      />
      <GlitchEffect text={text} /> // Add the glitch effect to the input text
    </div>
  );
};

export default Terminal;
