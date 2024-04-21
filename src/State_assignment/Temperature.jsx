import React, { useState } from 'react';

function TemperatureConverter() {
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');

  const handleCelsiusChange = (event) => {
    const value = event.target.value;
    setCelsius(value);
    setFahrenheit((parseFloat(value) * 9 / 5) + 32 || '');
  };

  const handleFahrenheitChange = (event) => {
    const value = event.target.value;
    setFahrenheit(value);
    setCelsius(((parseFloat(value) - 32) * 5 / 9) || '');
  };

  return (
    <div>
      <h1>Temperature Converter</h1>
      <label>
        Celsius:
        <input
          type="number"
          value={celsius}
          onChange={handleCelsiusChange}
          placeholder="Enter temperature in Celsius"
        />
      </label>
      <br />
      <label>
        Fahrenheit:
        <input
          type="number"
          value={fahrenheit}
          onChange={handleFahrenheitChange}
          placeholder="Enter temperature in Fahrenheit"
        />
      </label>
      <br />
      <p>{celsius && `Fahrenheit: ${fahrenheit}`}</p>
      <p>{fahrenheit && `Celsius: ${celsius}`}</p>
    </div>
  );
}

export default TemperatureConverter;
