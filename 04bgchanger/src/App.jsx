import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");
  let redColor = "red";
  let greenColor = "green";
  let blueColor = "blue";

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2">
          <button
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            onClick={() => setColor("red")}
            style={{ backgroundColor: redColor }}
          >
            Red
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            onClick={() => setColor("green")}
            style={{ backgroundColor: greenColor }}
          >
            Green
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            onClick={() => setColor("blue")}
            style={{ backgroundColor: blueColor }}
          >
            Blue
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
