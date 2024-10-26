import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body{
  background-image: url("https://github.com/mariaccarolina/TurmaFDV/blob/main/imagens/Imagem%20palacio.png?raw=true");
  background-position: center;
  height: 100vh;
  text-align: center;
}
`;
const Titulo = styled.h2`
  color: white;
`;
const Aviso = styled.h3`
  color: white;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
`;
export default function App() {
  //useState
  const [lampada, setLampada] = useState(false);
  const trocarLampada = () => {
    setLampada(!lampada);
  };

  return (
    <main>
      <GlobalStyle />
      <Titulo>
        "Liberte a magia da sedução e da programação com a Lâmpada de Aladim."
      </Titulo>
      {/* Altera a imagem com base no estado */}
      <img
        src={
          lampada
            ? "https://github.com/mariaccarolina/TurmaFDV/blob/main/imagens/lampada-com-mago.png?raw=true"
            : "https://github.com/mariaccarolina/TurmaFDV/blob/main/imagens/lampada.png?raw=true"
        }
        alt="Lâmpada"
      />
      <button onClick={trocarLampada}>
        <Aviso>Clique Aqui e faça um Pedido</Aviso>
      </button>
    </main>
  );
}
