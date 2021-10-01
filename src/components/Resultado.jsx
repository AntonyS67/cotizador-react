import styled from '@emotion/styled'
import React from 'react'


const Mensaje = styled.p`
    background-color: rgb(127,224,237);
`

const ResultadoCotizacion = styled.div`
    text-align: center;
    padding: .5rem;
    border: 1px solid #26c6da;
    background-color: rgb(127,224,237);
    margin-top: 1rem;
    position: relative;
`
const TextoCotizacion = styled.p`
    color:#00838f;
    padding:1rem;
    text-transform: uppercase;
    font-weight: bold;
    margin:0;
`

function Resultado({cotizacion}) {
    if(cotizacion === 0) return null
    return (
        (cotizacion === 0)
            ? <Mensaje>Elige marca, año y tipo de seguro</Mensaje>
            :
            <ResultadoCotizacion>
                <TextoCotizacion>El total es: $ {cotizacion}</TextoCotizacion>
            </ResultadoCotizacion> 
    )
}

export default Resultado
