import React, { useState } from 'react';

function WeightConverter() {
  const [kilograms, setKilograms] = useState('');
  const [grams, setGrams] = useState('');
  const [pounds, setPounds] = useState('');

  const handleKilogramsChange = (event) => {
    const value = event.target.value;
    setKilograms(value);
    setGrams((parseFloat(value) * 1000) || '');
    setPounds((parseFloat(value) * 2.20462) || '');
  };

  const handleGramsChange = (event) => {
    const value = event.target.value;
    setGrams(value);
    setKilograms((parseFloat(value) / 1000) || '');
    setPounds((parseFloat(value) / 453.592) || '');
  };

  const handlePoundsChange = (event) => {
    const value = event.target.value;
    setPounds(value);
    setKilograms((parseFloat(value) / 2.20462) || '');
    setGrams((parseFloat(value) * 453.592) || '');
  };

  return (
    <div>
      <h1>Weight Converter</h1>
      <label>
        Kilograms:
        <input
          type="number"
          value={kilograms}
          onChange={handleKilogramsChange}
          placeholder="Enter weight in Kilograms"
        />
      </label>
      <br />
      <label>
        Grams:
        <input
          type="number"
          value={grams}
          onChange={handleGramsChange}
          placeholder="Enter weight in Grams"
        />
      </label>
      <br />
      <label>
        Pounds:
        <input
          type="number"
          value={pounds}
          onChange={handlePoundsChange}
          placeholder="Enter weight in Pounds"
        />
      </label>
      <br />
      <p>{kilograms && `Grams: ${grams}`}</p>
      <p>{kilograms && `Pounds: ${pounds}`}</p>
      <p>{grams && `Kilograms: ${kilograms}`}</p>
      <p>{grams && `Pounds: ${pounds}`}</p>
      <p>{pounds && `Kilograms: ${kilograms}`}</p>
      <p>{pounds && `Grams: ${grams}`}</p>
    </div>
  );
}

export default WeightConverter;
