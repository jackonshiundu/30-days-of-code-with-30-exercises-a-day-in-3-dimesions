// Write custom hook implementation here.
import React, { useEffect, useState } from "react";
//custome hooks
export const useLocalStorage = (key, initialValue) => {
  let storedValue = JSON.parse(localStorage.getItem(key));
  const [value, setValue] = useState(storedValue || initialValue);
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
  return [value, setValue];
};

//using the hooks
import * as React from "react";
import "./style.css";
import { useLocalStorage } from "./useLocalStorage";
export default function App() {
  const [theme, setTheme] = useLocalStorage("theme", "light");
  return (
    <div className="container">
      <h1>useLocalStorage</h1>
      <span>Algochurn</span>
      <p>Read the description to start solving the problem</p>
      {/* Write your code here */}
      theme:{theme}
      <select
        name="mode"
        id="mode"
        value={theme}
        onChange={(e) => setTheme(e.target.value)}
      >
        <option value="select Mode">SelectMode</option>
        <option value="dark">Dark</option>
        <option value="light">Light</option>
      </select>
    </div>
  );
}
