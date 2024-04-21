import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  const addValue = () => {
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
  };
  const subValue = () => {
    setCounter(counter - 1);
  };
  return (
    <>
      <h1>React Course With Hitesh</h1>
      <h2>Counter Value : {counter} </h2>
      <button onClick={addValue}>Add Value</button>{" "}
      <button onClick={subValue}>Remove Value</button>
      <p>Footer : {counter}</p>
    </>
  );
}

export default App;
