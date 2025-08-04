// tasks/task-01-counter-app/CounterApp.jsx

import React, { useState } from 'react';

function CounterApp() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ padding: "20px" }}>
      <h2>🧮 React Counter App</h2>
      <p>Current count: <strong>{count}</strong></p>
      <button onClick={() => setCount(count + 1)}>Increment ➕</button>
      <button onClick={() => setCount(count - 1)} style={{ marginLeft: "10px" }}>Decrement ➖</button>
      <button onClick={() => setCount(0)} style={{ marginLeft: "10px" }}>Reset 🔄</button>
    </div>
  );
}

export default CounterApp;
