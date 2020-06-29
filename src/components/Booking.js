import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faCalendarCheck,
  faUserAlt,
  faSortDown,
} from "@fortawesome/free-solid-svg-icons";

const homeIcon = <FontAwesomeIcon icon={faHome} />;
const calenderIcon = <FontAwesomeIcon icon={faCalendarCheck} />;
const userIcon = <FontAwesomeIcon icon={faUserAlt} />;
const dropDownIcon = <FontAwesomeIcon icon={faSortDown} />;

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
  border: 1px solid rgba(231, 231, 242, 0.3);
  box-sizing: border-box;
  border-radius: 10px;
  display: flex;
  color: #e7e7f2;
  font-family: "Karla", sans-serif;
`;

const AccommodationContainer = styled.div`
  width: 40%;
  height: 100%;
  border-right: 1px solid rgba(231, 231, 242, 0.3);
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px 0 15px;
  cursor: pointer;
`;

const CheckIn = styled.div`
  width: 22%;
  height: 100%;
  border-right: 1px solid rgba(231, 231, 242, 0.3);
  box-sizing: border-box;
  display: flex;
  align-items: center;
  padding: 0 15px 0 15px;
  cursor: pointer;
`;

const CheckOut = styled.div`
  width: 15%;
  height: 100%;
  border-right: 1px solid rgba(231, 231, 242, 0.3);
  box-sizing: border-box;
  display: flex;
  align-items: center;
  padding: 0 15px 0 15px;
  cursor: pointer;
`;

const Guests = styled.div`
  width: 23%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px 0 15px;
  cursor: pointer;
`;

const DataContainer = styled.div`
  display: flex;
  align-items: center;
`;

const TextContainer = styled.div``;

const IconContainer = styled.div`
  opacity: 0.6;
  padding: 0 10px 0 0;
`;

const BookTitle = styled.h4`
  font-size: 14px;
  line-height: 14px;
  opacity: 0.6;
`;

const BookingInformation = styled.h4`
  font-size: 16px;
  line-height: 20px;
  color: #ffffff;
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
          <BookingContainer>
            <AccommodationContainer>
              <DataContainer>
                <IconContainer>{homeIcon}</IconContainer>
                <TextContainer>
                  <BookTitle>Accommodation</BookTitle>
                  <BookingInformation>
                    6730 Luna Land North Rhiannonmouth
                  </BookingInformation>
                </TextContainer>
              </DataContainer>
              <IconContainer>{dropDownIcon}</IconContainer>
            </AccommodationContainer>
            <CheckIn>
              <IconContainer>{calenderIcon}</IconContainer>
              <TextContainer>
                <BookTitle>Check-in</BookTitle>
                <BookingInformation>19.06.2019</BookingInformation>
              </TextContainer>
            </CheckIn>
            <CheckOut>
              <TextContainer>
                <BookTitle>Check-out</BookTitle>
                <BookingInformation>19.06.2019</BookingInformation>
              </TextContainer>
            </CheckOut>
            <Guests>
              <DataContainer>
                <IconContainer>{userIcon}</IconContainer>
                <TextContainer>
                  <BookTitle>Guests</BookTitle>
                  <BookingInformation>4 adults</BookingInformation>
                </TextContainer>
              </DataContainer>
              <IconContainer>{dropDownIcon}</IconContainer>
            </Guests>
          </BookingContainer>
        </ReservationContainer>
        <SearchButton>Search</SearchButton>
      </BG>
    </Container>
  );
}

export default Booking;
