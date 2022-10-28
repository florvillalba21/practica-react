import { useState } from "react";
// crear dos botones q permitan incrementar y decrementar en un contador dentro de un componente 
// otro componente q tenga un boton q largue un msj booleano 


export const BtnIncrement = () => {
  const [count, setCount] = useState(1);

  return (
    <div className="container">
      <div>
        <h2>Contador: {count}</h2>
      </div>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Incrementar +1
      </button>
      <button
        type="button"
        className="btn btn-secondary"
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrementar 1
      </button>
    </div>
  );
};
