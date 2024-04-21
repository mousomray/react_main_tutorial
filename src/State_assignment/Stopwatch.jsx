import React, { useState, useEffect } from 'react';

function Stopwatch() {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    let intervalId;
    if (isRunning) {
      intervalId = setInterval(() => {
        setElapsedTime(prevElapsedTime => prevElapsedTime + 1);
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [isRunning]);

  const handleStartStopClick = () => {
    setIsRunning(prevIsRunning => !prevIsRunning);
  };

  const handleResetClick = () => {
    setElapsedTime(0);
    setIsRunning(false);
  };

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div>
      <h1>Stopwatch</h1>
      <p>Elapsed Time: {formatTime(elapsedTime)}</p>
      <button onClick={handleStartStopClick}>{isRunning ? 'Stop' : 'Start'}</button>
      <button onClick={handleResetClick}>Reset</button>
    </div>
  );
}

export default Stopwatch;
