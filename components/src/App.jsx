import ComponenteHijo from "./Components/ComponenteHijo";
import { useState } from "react";

function App() {
  const [mensaje,setMensaje] = useState("mensaje desde el padre")
  const cambiarMensaje = (msj) => {
    setMensaje(msj)
  }
  return (
    <>
      <p>Componente Padre</p>
      <button onClick={(_)=> cambiarMensaje("mensaje desde el padre")}>volver al mensaje del padre</button>
      <ComponenteHijo nombre="Javi" cambiarMensaje={cambiarMensaje}/>
      <hr />
      <p>{mensaje}</p> 
    </>
  );
};

export default App
