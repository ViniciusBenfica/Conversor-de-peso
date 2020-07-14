import React from "react";
import "./App.css";

import ConversorEsquerda from "./Componentes/ConversorTerraParaMarte";
import ConversorDireita from "./Componentes/ConversorMarteParaTerra";

function App() {
  return (
    <div className="App">
      <hi className="principal">Conversor de peso</hi>
      <div className="linha">
        <ConversorEsquerda
          PesoNaTerra="Peso na Terra"
          PesoEmMarte="Peso em marte"
        ></ConversorEsquerda>
        <ConversorDireita
          PesoEmMarte="Peso em marte"
          PesoNaTerra="Peso na Terra"
        ></ConversorDireita>
      </div>
    </div>
  );
}

export default App;
