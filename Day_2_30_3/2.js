import React, { useState } from "react";

const App = () => {
  const [hours, setHours] = useState("00");
  const [minutes, setMinutes] = useState("00");

  // Function to increment the hours
  const incrementHours = () => {
    setHours((prevHours) => {
      const newHours = (parseInt(prevHours, 10) + 1) % 24; // Cycles hours from 0 to 23
      return newHours < 10 ? `0${newHours}` : newHours.toString(); // Ensure two digits
    });
  };

  // Function to decrement the hours
  const decrementHours = () => {
    setHours((prevHours) => {
      const newHours = (parseInt(prevHours, 10) - 1 + 24) % 24; // Cycles hours from 23 to 0
      return newHours < 10 ? `0${newHours}` : newHours.toString(); // Ensure two digits
    });
  };

  // Function to increment the minutes
  const incrementMinutes = () => {
    setMinutes((prevMinutes) => {
      const newMinutes = (parseInt(prevMinutes, 10) + 1) % 60; // Cycles minutes from 0 to 59
      return newMinutes < 10 ? `0${newMinutes}` : newMinutes.toString(); // Ensure two digits
    });
  };

  // Function to decrement the minutes
  const decrementMinutes = () => {
    setMinutes((prevMinutes) => {
      const newMinutes = (parseInt(prevMinutes, 10) - 1 + 60) % 60; // Cycles minutes from 59 to 0
      return newMinutes < 10 ? `0${newMinutes}` : newMinutes.toString(); // Ensure two digits
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white shadow-md rounded-lg p-6">
        <div className="flex justify-between mb-4">
          <button
            id="hours-up-button"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            onClick={incrementHours}
          >
            ↑
          </button>
          <button
            id="minutes-up-button"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            onClick={incrementMinutes}
          >
            ↑
          </button>
        </div>
        <div className="text-center mb-4">
          <div
            id="clock"
            className="text-4xl font-bold bg-blue-500 text-white py-4 px-6 rounded"
          >
            {`${hours}:${minutes}`}
          </div>
        </div>
        <div className="flex justify-between">
          <button
            id="hours-down-button"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            onClick={decrementHours}
          >
            ↓
          </button>
          <button
            id="minutes-down-button"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            onClick={decrementMinutes}
          >
            ↓
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
/* take aways
 if you wrap through numbers sthen you x % 24; if x is less that that it returens x otherwise it returns the remainder

 parseInt(prevHours, 10) - 1 + 24) % 24; and the (prevHours, 10) - 1 + 24) syntax will make it loop through 0-24 */
