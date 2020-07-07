import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faCalendarCheck,
  faUserAlt,
  faSortDown,
} from '@fortawesome/free-solid-svg-icons';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

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

  @media only screen and (max-width: 768px) {
    height: 35%;
  }
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

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    height: 100%;
  }
`;

const ReservationContainer = styled.div`
  width: 90%;

  @media only screen and (max-width: 768px) {
    width: 90%;
    height: 100%;
  }
`;

const Title = styled.h4`
  font-family: 'Karla', sans-serif;
  font-size: 18px;
  line-height: 21px;
  display: flex;
  align-items: center;
  color: #ffffff;
  mix-blend-mode: normal;
  margin-bottom: 16px;

  @media only screen and (max-width: 768px) {
    margin-top: 8px;
  }
`;

const BookingContainer = styled.div`
  width: 75%;
  height: 72px;
  border: 1px solid rgba(231, 231, 242, 0.3);
  box-sizing: border-box;
  border-radius: 10px;
  display: flex;
  color: #e7e7f2;
  font-family: 'Karla', sans-serif;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    border: none;
    height: 75%;
  }
`;

const SearchContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    height: 87%;
  }
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

  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 0 0 0 0;
    border: none;
    margin-bottom: 8px;
  }
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

  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 0 0 0 0;
    border: none;
    margin-bottom: 8px;
  }
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

  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 0 0 0 0;
    border: none;
    margin-bottom: 8px;
    padding: 0px 0 0 25px;
  }
`;

const Guests = styled.div`
  width: 23%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px 0 15px;
  cursor: pointer;

  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 0 0 0 0;
  }
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

const AccommodatioMenuContainer = styled.div`
  display: none;
  position: absolute;
  top: -40px;
  background: rgba(76, 86, 85, 0.95);
  min-width: 400px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  padding: 5px 0 5px 10px;
  border-radius: 25px;
  cursor: pointer;

  @media only screen and (max-width: 768px) {
    top: -90px;
  }
`;

const GuestsMenuContainer = styled.div`
  display: none;
  position: absolute;
  top: -40px;
  background: rgba(76, 86, 85, 0.95);
  min-width: 280px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  padding: 5px 0 5px 10px;
  border-radius: 25px;
  cursor: pointer;

  @media only screen and (max-width: 768px) {
    top: 65px;
  }
`;

const DropDownMenuFont = styled.h5`
  font-size: 16px;
  line-height: 20px;
  color: #ffffff;
  padding: 5px 0;
  z-index: 2;
`;

const SearchButton = styled.div`
  width: 240px;
  height: 72px;
  font-family: 'Karla', sans-serif;
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

  @media only screen and (max-width: 768px) {
    width: 100%;
    height: 53px;
  }
`;

function Booking() {
  const [accommodationDisplay, setAccommodationDisplay] = useState(
    '6730 Luna Land North Rhiannonmouth'
  );
  const [guestsDisplay, setGuestsDisplay] = useState('4 adults');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const accommodation = useRef();
  const guests = useRef();
  const luna = useRef();
  const busan = useRef();
  const ulsan = useRef();
  const daegu = useRef();
  const first = useRef();
  const second = useRef();
  const third = useRef();
  const fourth = useRef();

  const toggleAccommodation = () => {
    if (accommodation.current.style.display === 'block') {
      accommodation.current.style.display = 'none';
      return;
    }
    accommodation.current.style.display = 'block';
    return;
  };

  const toggleGuests = () => {
    if (guests.current.style.display === 'block') {
      guests.current.style.display = 'none';
      return;
    }
    guests.current.style.display = 'block';
    return;
  };

  const setAccommodation = (region) => {
    setAccommodationDisplay(region.current.innerHTML);
    accommodation.current.style.display = 'none';
    toggleAccommodation();
  };

  const setGuests = (person) => {
    setGuestsDisplay(person.current.innerHTML);
    guests.current.style.display = 'none';
    toggleGuests();
  };

  const CustomInput = ({ value, onClick }) => (
    <button
      style={{
        color: '#ffffff',
        backgroundColor: 'transparent',
        fontSize: '16px',
        fontFamily: "'Karla', sans-serif",
        border: 'none',
        padding: '0',
      }}
      onClick={onClick}
    >
      {value}
    </button>
  );

  return (
    <Container>
      <BG>
        <ReservationContainer>
          <Title>Book your vacation</Title>
          <SearchContainer>
            <BookingContainer>
              <AccommodationContainer onClick={toggleAccommodation}>
                <DataContainer>
                  <IconContainer>{homeIcon}</IconContainer>
                  <TextContainer>
                    <BookTitle>Accommodation</BookTitle>
                    <BookingInformation>
                      {accommodationDisplay}
                    </BookingInformation>
                  </TextContainer>
                </DataContainer>
                <IconContainer>{dropDownIcon}</IconContainer>
                <AccommodatioMenuContainer ref={accommodation}>
                  <DropDownMenuFont
                    ref={luna}
                    onClick={() => setAccommodation(luna)}
                  >
                    6730 Luna Land North Rhiannonmouth
                  </DropDownMenuFont>
                  <DropDownMenuFont
                    ref={busan}
                    onClick={() => setAccommodation(busan)}
                  >
                    6290 Laura Lane North Rhiannon Mouth
                  </DropDownMenuFont>
                  <DropDownMenuFont
                    ref={ulsan}
                    onClick={() => setAccommodation(ulsan)}
                  >
                    6290 Mills Creek Ln, North Ridgeville
                  </DropDownMenuFont>
                  <DropDownMenuFont
                    ref={daegu}
                    onClick={() => setAccommodation(daegu)}
                  >
                    6290 San Renaldo Cir, Buena Park
                  </DropDownMenuFont>
                </AccommodatioMenuContainer>
              </AccommodationContainer>
              <CheckIn>
                <IconContainer>{calenderIcon}</IconContainer>
                <TextContainer>
                  <BookTitle>Check-in</BookTitle>
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    dateFormat='dd/MM/yyyy'
                    minDate={new Date()}
                    customInput={<CustomInput />}
                  />
                </TextContainer>
              </CheckIn>
              <CheckOut>
                <TextContainer>
                  <BookTitle>Check-out</BookTitle>
                  <DatePicker
                    selected={endDate}
                    onChange={(date) => setEndDate(date)}
                    dateFormat='dd/MM/yyyy'
                    minDate={new Date()}
                    customInput={<CustomInput />}
                  />
                </TextContainer>
              </CheckOut>
              <Guests onClick={toggleGuests}>
                <DataContainer>
                  <IconContainer>{userIcon}</IconContainer>
                  <TextContainer>
                    <BookTitle>Guests</BookTitle>
                    <BookingInformation>{guestsDisplay}</BookingInformation>
                  </TextContainer>
                </DataContainer>
                <IconContainer>{dropDownIcon}</IconContainer>
                <GuestsMenuContainer ref={guests}>
                  <DropDownMenuFont
                    ref={first}
                    onClick={() => setGuests(first)}
                  >
                    1 adults
                  </DropDownMenuFont>
                  <DropDownMenuFont
                    ref={second}
                    onClick={() => setGuests(second)}
                  >
                    2 adults
                  </DropDownMenuFont>
                  <DropDownMenuFont
                    ref={third}
                    onClick={() => setGuests(third)}
                  >
                    3 adults
                  </DropDownMenuFont>
                  <DropDownMenuFont
                    ref={fourth}
                    onClick={() => setGuests(fourth)}
                  >
                    4 adults
                  </DropDownMenuFont>
                </GuestsMenuContainer>
              </Guests>
            </BookingContainer>
            <SearchButton>Search</SearchButton>
          </SearchContainer>
        </ReservationContainer>
      </BG>
    </Container>
  );
}

export default Booking;
