import React, { useState } from 'react';

const Text = () => {
  const [text, setText] = useState('');
  const [transformedText, setTransformedText] = useState('');

  const handleUppercase = () => {
    setTransformedText(text.toUpperCase());
  };

  const handleLowercase = () => {
    setTransformedText(text.toLowerCase());
  };

  const handleCapitalize = () => {
    const capitalized = text
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
    setTransformedText(capitalized);
  };

  const handleReset = () => {
    setText('');
    setTransformedText('');
  };

  return (
    <div className="container">
      <textarea value={text} 
      onChange={(e) => setText(e.target.value)} 
      placeholder="Type your text here" rows="6" className="textarea"/>
      <div className="button-group">
        <button onClick={handleUppercase} className="button">Uppercase</button>
        <button onClick={handleLowercase} className="button">Lowercase</button>
        <button onClick={handleCapitalize} className="button">Capitalize</button>
        <button onClick={handleReset} className="button reset-button">Reset</button>
      </div>
      <h2>Output</h2>
      <div className="output">
            {transformedText ? transformedText : <b>No text to display</b>}
       </div>

    </div>
  );
};

export default Text;
