import React from 'react';
import styled from '@emotion/styled';
import {TransitionGroup, CSSTransition} from 'react-transition-group';

const Mensaje = styled.p`
    background-color: rgb(127, 224, 237);
    margin-top: 2rem;
    padding: 1rem;
    text-align: center;
`;
const ResultadoCotizacion = styled.div`
    text-align: center;
    padding: .5rem;
    border: 1px solid #26C6DA;
    background-color:  rgb(127, 224, 237);
    margin-top: 1rem;
    position: relative;
`;

const MensajeTotal = styled.label`
    
    color: #00838f;
    text-transform: uppercase;
    padding: 1rem;
    font-weight: bold;
    margin: 0;
`;
const Resultado = ({cotizacion}) => {

    
    return ( 
        (cotizacion === 0) 
        ? <Mensaje>Elige marca, año y tipo de seguro</Mensaje> 
         
        : (
            
            <ResultadoCotizacion>
                <TransitionGroup
                    component="p"  // la (p) corresponde al parrafo que deseo animar
                    className="resultado"
                >
                    <CSSTransition 
                        classNames="resultado"
                        key={cotizacion}
                        timeout={{enter: 500, exit: 500}}
                    >
                        <MensajeTotal>El total es: ${cotizacion}</MensajeTotal>
                    </CSSTransition>
                </TransitionGroup>
            </ResultadoCotizacion>

          )
    )

}
 
export default Resultado;