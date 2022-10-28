import { useEffect, useState } from "react";

export const BtnBooleano = () => {
  const [state, setState] = useState(true);

  //   useEffect(() => {
  //     console.log("state", [state]);
  //   });

  return (
    <div>
      <button
        className="btn btn-primary"
        type="button"
        onClick={() => {
          state ? setState(false) : setState(true);
        }}
      >
        Mostrar estado del mensaje
      </button>
      <br />
      <div>
        <h2 className="display-3">{`${state}`}</h2>
      </div>
    </div>
  );
};
