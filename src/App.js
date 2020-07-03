import React, { useState, useRef, useMemo } from "react";
import styled, { createGlobalStyle } from "styled-components";
import Botao from "./Botao";

const Time = styled.h1`
  font-size: 3rem;
  font-family: Tahoma;
`;
const GlobalStyle = createGlobalStyle`
  #root{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

function App() {
  const [value, setValue] = useState("");
  const [contador, setContador] = useState(0);
  const interval = useRef();
  const tick = useRef();

  tick.current = ()=>{
    setContador(contador-1);
  }
  
  const tempo = useMemo(()=>{
    if(contador <= 0) return '00:00';

    const segundos = String(contador % 60).padStart(2, "0");
    const minutos = String(Math.floor(contador / 60)).padStart(2, "0");
   
    return `${minutos}:${segundos}`
  }, [contador]);

  function quandoIniciar() {
    const tempo = Math.round(value) * 60;
    setContador(tempo);

    clearInterval(interval.current)
    interval.current = setInterval(()=>{
      tick.current();
    }, 1000);
  }

  return (
    <>
      <GlobalStyle />
      <header>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Botao type="button" onClick={quandoIniciar}>
          Iniciar
        </Botao>
      </header>
      <main className="main">
        <Time>{tempo}</Time>
      </main>
    </>
  );
}

export default App;
