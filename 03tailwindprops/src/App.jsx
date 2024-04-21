import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card"

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-3xl  bg-green-500 rounded-md p-3">Hello</h1>
	  <Card username="Shubhayan" imgSource = "https://github.com/S11UB11AYAN/Wallpapers/blob/main/0031.jpeg?raw=true"/>
	  <Card />
    </>
  );
}

export default App;
