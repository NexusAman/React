import { useState } from "react";

function App() {
  const [color, setColor] = useState("black");
  return (
    <>
      <div
        className="w-full h-screen transition-all duration-600"
        style={{ backgroundColor: color }}
      >
        <div className="fixed bg-white bottom-10 left-1/2 -translate-x-1/2 rounded-full px-4 py-2 flex gap-3">
          <button
            onClick={() => setColor("red")}
            className="bg-red-600 rounded-full text-white px-4 py-2"
          >
            Red
          </button>
          <button
            onClick={() => setColor("green")}
            className="bg-green-600 rounded-full text-white px-4 py-2"
          >
            Green
          </button>
          <button
            onClick={() => setColor("blue")}
            className="bg-blue-600 rounded-full text-white px-4 py-2"
          >
            Blue
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
