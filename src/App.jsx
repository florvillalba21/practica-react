import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
// import Saludo from "./components/layout/Saludo";
import { BtnIncrement } from "./components/layout/BtnIncrement";
import { BtnBooleano } from "./components/layout/BtnBooleano";

function App() {
  //const [count, setCount] = useState(0)

  return (
    <div>
      {<BtnIncrement />}
      <br />
      {<BtnBooleano />}
    </div>
  );
}

export default App;
