import styled from "@emotion/styled";
import { useState } from "react";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import Resultado from "./components/Resultado";
import Resumen from "./components/Resumen";

const Contenedor = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const ContenedorFormulario = styled.div`
  background-color: #FFF;
  padding:3rem;
`;

function App() {
  const [resumen,setResumen] = useState({
    cotizacion:0,
    datos:{
      marca:'',
      year:'',
      plan:''
    }
  })
  const {datos,cotizacion} = resumen
  return (
    <Contenedor>
      <Header title="Cotizador de Seguros"/>
      <ContenedorFormulario>
        <Formulario
          setResumen={setResumen}
        />
        <Resumen datos={datos}/>
        <Resultado cotizacion={cotizacion}/>
      </ContenedorFormulario>
    </Contenedor>
  );
}

export default App;
