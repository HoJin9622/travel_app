import React from "react";
import styled from "styled-components";
import Navigation from "./Navigation";
import Banner from "./Banner";
import Booking from "./Booking";

const Background = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url("https://github.com/HoJin9622/travel_app/blob/master/public/images/bg.png?raw=true");
  background-size: cover;
  background-position: center center;

  @media only screen and (max-width: 768px) {
    position: relative;
    min-height: 812px;
  }
`;

function App() {
  return (
    <>
      <Background>
        <Navigation />
        <Banner />
        <Booking />
      </Background>
    </>
  );
}

export default App;
