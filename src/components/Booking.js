import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: center;
`;

const BG = styled.div`
  width: 80%;
  height: 193px;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(70px);
  border-radius: 20px 20px 0px 0px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const ReservationContainer = styled.div`
  width: 70%;
`;

const Title = styled.h4`
  font-family: "Karla", sans-serif;
  font-size: 18px;
  line-height: 21px;
  display: flex;
  align-items: center;
  color: #ffffff;
  mix-blend-mode: normal;
  margin-bottom: 16px;
`;

const BookingContainer = styled.div`
  height: 72px;
  opacity: 0.3;
  border: 1px solid #e7e7f2;
  box-sizing: border-box;
  border-radius: 10px;
`;

const SearchButton = styled.div`
  width: 240px;
  height: 72px;
  font-family: "Karla", sans-serif;
  font-size: 18px;
  line-height: 20px;
  color: #ffffff;
  mix-blend-mode: normal;
  background: #91cb82;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

function Booking() {
  return (
    <Container>
      <BG>
        <ReservationContainer>
          <Title>Book your vacation</Title>
          <BookingContainer></BookingContainer>
        </ReservationContainer>
        <SearchButton>Search</SearchButton>
      </BG>
    </Container>
  );
}

export default Booking;
