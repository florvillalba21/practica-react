import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Saludo from "./components/layout/Saludo";

function App() {
  //const [count, setCount] = useState(0)

  // const Saludar = (props) => {
  //   const { nombre, tipo } = props;
  //   return <p></p>;
  // };
  return <Saludo texto = "hola" />;
}

export default App;
