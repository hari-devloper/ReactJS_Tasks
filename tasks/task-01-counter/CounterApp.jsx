import React, { useState } from 'react';

const CounterApp = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => setCount(count + 1);
  const handleDecrement = () => setCount(count - 1);
  const handleReset = () => setCount(0);

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h2>🧮 React Counter App</h2>
      <p>Count: <strong>{count}</strong></p>
      <button onClick={handleIncrement}>➕ Increment</button>
      <button onClick={handleDecrement} style={{ marginLeft: '10px' }}>➖ Decrement</button>
      <button onClick={handleReset} style={{ marginLeft: '10px' }}>🔄 Reset</button>
    </div>
  );
};

export default CounterApp;
