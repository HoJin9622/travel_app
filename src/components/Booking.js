import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 15%;
  display: flex;
  justify-content: center;
`;

const BG = styled.div`
  width: 80%;
  height: 145px;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(70px);
  border-radius: 20px 20px 0px 0px;
`;

function Booking() {
  return (
    <Container>
      <BG></BG>
    </Container>
  );
}

export default Booking;
