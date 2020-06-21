import React from "react";
import styled from "styled-components";
import Navigation from "./Navigation";

const Background = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url("/images/bg.png");
  background-size: cover;
  background-position: center center;
`;

function App() {
  return (
    <>
      <Background>
        <Navigation />
      </Background>
    </>
  );
}

export default App;
