import React from 'react'

export const Componente1 = () => {
    return <>
        <p>Oi, tudo bem?</p>
    </>
}

export const Componente2 = props => {
    return <>
        <p>Olá, {props.nome}!!! Tudo bem?</p>
    </>
}

// Exportar por padrão (adicional)
// export default { Componente1, Componente2 }