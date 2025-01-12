//Question: Identify and fix any performance bottlenecks in the following React component:

import React from "react";

const MyComponent = () => {
  const data = fetchData(); // Assume this function fetches data from an API

  return (
    <div>
      {data.map((item) => (
        <p key={item.id}>{item.name}</p>
      ))}
    </div>
  );
};

export default MyComponent;
//solution;
/*  To optimize the performance of the component, we should avoid calling the fetchData function on every render. Instead, we can use the useEffect hook to fetch the data once when the component mounts. Here’s an updated version of the component:
 */
import React, { useEffect, useState } from 'react';

const MyComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('API_URL');
      const data = await response.json();
      setData(data);
    };

    fetchData();
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <div>
      {data.map((item) => (
        <p key={item.id}>{item.name}</p>
      ))}
    </div>
  );
};

export default MyComponent;
