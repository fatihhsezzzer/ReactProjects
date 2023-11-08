import React from "react";
import React, { useState } from 'react';
function Counter() {
    const [count, setCount] = useState(0);
  
    const incrementCount = () => {
      setCount(count + 1);
    };
  
    const decrementCount = () => {
      setCount(count - 1);
    };
  
    return (
      <div>
        <h1>Count: {count}</h1>
        <button onClick={incrementCount}>Artır</button>
        <button onClick={decrementCount}>Azalt</button>
      </div>
    );
  }
  
  export default Counter;