import React, { useState } from 'react';
import Header from './componentes/Header'
import styled from '@emotion/styled';

import Formulario from './componentes/Formulario';
import Resumen from './componentes/Resumen';
import Resulado from './componentes/Resultado';
import Sppiner from './componentes/Spinner';

const Contenedor=styled.div`
    max-width: 600px;
    margin: 0 auto;
`;

const ContenedorFormulario=styled.div`
    background-color: #FFF;
    padding: 3rem;
`;

function App() {

const [resumen, guardarResumen] = useState({
  cotizacion: 0,
  datos:{
    marca: '',
    year: '',
    plan: ''
  }
});

const [cargando, guardarCargando ] = useState(false);

 // extraer datos 

 const {cotizacion,datos} = resumen;

  return (
    <Contenedor>
      <Header 
          titulo='Cotizador de seguros'
      />
      <ContenedorFormulario>
        <Formulario 
          guardarResumen={guardarResumen}
          guardarCargando={guardarCargando}
        />

        {cargando ? <Sppiner /> : null }
        

        <Resumen 
          datos={datos}
        /> 

        <Resulado
          cotizacion={cotizacion}
        />

      </ContenedorFormulario>
    </Contenedor> 
  );
}

export default App;
