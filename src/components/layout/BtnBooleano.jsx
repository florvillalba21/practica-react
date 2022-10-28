import { useEffect , useState } from "react";

export const BtnBooleano = () => {
  const [state, setState] = useState(true);
  useEffect(()=>{
    console.log("state", [state])
  })

  return (
    <div className="container">
        <div>
            <h3>
                el estado es: {state}
            </h3>
        </div>
      <button
        className="btn btn-primary"
        type="button"
        onClick={() => {
          (state)
             setState(state => !state)
            
          
        }}
      >
        Mostrar estado del mensaje
      </button>
    </div>
  );
};
