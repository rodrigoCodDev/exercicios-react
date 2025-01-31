import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Primeiro from './components/Primeiro';
import Segundo from './components/Segundo';
import { Componente1, Componente2 } from './components/Terceiro';
import Saudacao from './components/Saudacao';
import Pai from './components/Pai';
import Filho from './components/Filho';

const root = ReactDOM.createRoot(document.getElementById('root'));

// Renderização - Código JSX
root.render(
  <>
    <App />
    <Primeiro />
    <Segundo nome="rodrigoCodDev"/>

    <Componente1/>
    <Componente2 nome="Rodrigo"/>

    <Saudacao tipo="Bom dia" nome="CodDev" />

    <Pai nome="Mozart" sobrenome="W.">
      <Filho nome="Ana"/>
      <Filho nome="Martin"/>
      <Filho nome="Julieta"/>
      <Filho nome="Clive"/>
      <Filho nome="Albert"/>
    </Pai>

  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
