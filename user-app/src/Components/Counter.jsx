import React, { useState, useEffect } from "react";
import "./Counter.css";
import Card from "./UI/Card";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const identifier = setInterval(() => {
      setCounter((prevCounter) => prevCounter + 1);
    }, 1000);
    return () => {
      clearInterval(identifier);
    };
  }, []);

  return (
    <div className="counter">
      <Card>
        <h1>{counter}</h1>
      </Card>
    </div>
  );
};

export default Counter;
