import React from "react";
import styled from "styled-components";
import Navigation from "./Navigation";
import Banner from "./Banner";

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
        <Banner />
      </Background>
    </>
  );
}

export default App;
