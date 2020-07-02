import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const right_arrow = <FontAwesomeIcon icon={faArrowRight} />;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 213px 0 0 240px;
  height: 35%;

  @media only screen and (max-width: 768px) {
    height: 55%;
    padding: 20px 0 0 20px;
    flex-direction: column;
    align-items: flex-start;
  }
`;

const PhraseContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: #ffffff;

  @media only screen and (max-width: 768px) {
    padding: 0 0 15px 0;
  }
`;

const Title = styled.h1`
  font-family: "Karla", sans-serif;
  font-size: 96px;
  font-weight: bold;
  line-height: 110%;
  letter-spacing: 0.01em;

  @media only screen and (max-width: 768px) {
    font-size: 32px;
  }
`;

const Description = styled.h4`
  font-family: "Karla", sans-serif;
  font-size: 28px;
  line-height: 150%;
  opacity: 0.8;

  @media only screen and (max-width: 768px) {
    font-size: 24px;
  }
`;

const NextContainer = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(70px);
  border-radius: 16px 0px 0px 16px;

  @media only screen and (max-width: 768px) {
    height: 400px;
    width: 100%;
    margin-top: 30px;
  }
`;

const MetaData = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: #ffffff;
  padding: 48px 0 48px 36px;

  @media only screen and (max-width: 768px) {
    padding: 24px 0 24px 28px;
    width: 50%;
  }
`;

const NextTitle = styled.h3`
  font-family: "Karla", sans-serif;
  font-size: 36px;
  line-height: 135%;

  @media only screen and (max-width: 768px) {
    font-size: 28px;
  }
`;

const Arrow = styled.div`
  font-size: 20px;
  opacity: 0.5;
  cursor: pointer;
`;

const Next = styled.div`
  font-family: "Karla", sans-serif;
  font-size: 20px;
  line-height: 20px;
  mix-blend-mode: normal;
  opacity: 0.5;
`;

const NextImage = styled.div`
  width: 40%;
  background-image: url("https://github.com/HoJin9622/travel_app/blob/master/public/images/nextImage.png?raw=true");
  background-size: cover;
  background-position: center center;

  @media only screen and (max-width: 768px) {
    width: 50%;
  }
`;

function Banner() {
  return (
    <Container>
      <PhraseContainer>
        <Title>
          Beatiful Places <br />
          of England
        </Title>
        <Description>
          Plan your vacation on the most beatiful
          <br /> places of England
        </Description>
      </PhraseContainer>
      <NextContainer>
        <MetaData>
          <Next>UpNext</Next>
          <NextTitle>
            Aerial View
            <br /> of Rock
            <br /> Cliffs
          </NextTitle>
          <Arrow>{right_arrow}</Arrow>
        </MetaData>
        <NextImage />
      </NextContainer>
    </Container>
  );
}

export default Banner;
