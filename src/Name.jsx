import React, { useState, useEffect } from 'react';

const Inp = () => {
  const [inputValue, setInputValue] = useState('');
  const [displayedValues, setDisplayedValues] = useState([]);

  useEffect(() => {
    const storedValues = JSON.parse(localStorage.getItem('displayedValues'));
    if (storedValues) {
      setDisplayedValues(storedValues);
    }
  }, []); 
    
  const handleClick = () => {
    const newValues = [inputValue, ...displayedValues];
    setDisplayedValues(newValues);
    setInputValue('');

    localStorage.setItem('displayedValues', JSON.stringify(newValues));
  };

  const handleClear = () => {
    localStorage.removeItem('displayedValues');
    setDisplayedValues([]);
  };

  return (
    <div>
      <div >
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        
        <button  onClick={handleClick}>
          Add
        </button>
        <button   onClick={handleClear}>
          Delete
        </button>
      </div>
      <h2>
        {displayedValues.map((value, index) => (
          <p key={index}>{value}</p>
        ))}
      </h2>
    </div>
  );
};

export default Inp;
