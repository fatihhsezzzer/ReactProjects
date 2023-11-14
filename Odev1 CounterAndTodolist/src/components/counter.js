import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const increment = () => {
    count < 10 && setCount(count + 1);
  };
  const decrement = () => {
    count > 0 && setCount(count - 1);
  };
  return (
    <div className="container">
      <div className="row ">
        <span className="text-dark col-12 fs-1">Count:{count}</span>
        <button className="col-6 bg-secondary" onClick={increment}>
          Artır
        </button>
        <button className="col-6 bg-primary" onClick={decrement}>
          Azalt
        </button>
      </div>
    </div>
  );
}

export default Counter;
