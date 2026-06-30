import { useState } from "react";

function App() {
  const MIN_COUNT = 0;
  const MAX_COUNT = 20;

  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount((prevCount) =>
      prevCount < MAX_COUNT ? prevCount + 1 : prevCount,
    );
  };

  const decrementCount = () => {
    setCount((prevCount) =>
      prevCount > MIN_COUNT ? prevCount - 1 : prevCount,
    );
  };

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "50px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1>Counter App</h1>

      <h2>Count: {count}</h2>

      <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
        <button
          onClick={incrementCount}
          disabled={count === MAX_COUNT}
          style={{
            padding: "10px 20px",
            cursor: count === MAX_COUNT ? "not-allowed" : "pointer",
          }}
        >
          Increase
        </button>

        <button
          onClick={decrementCount}
          disabled={count === MIN_COUNT}
          style={{
            padding: "10px 20px",
            cursor: count === MIN_COUNT ? "not-allowed" : "pointer",
          }}
        >
          Decrease
        </button>
      </div>

      <p style={{ marginTop: "20px", color: "gray" }}>
        Count range: {MIN_COUNT} - {MAX_COUNT}
      </p>
    </div>
  );
}

export default App;
