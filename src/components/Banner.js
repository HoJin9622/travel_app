import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 213px 0 0 240px;
  height: 35%;
`;

const PhraseContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: #ffffff;
`;

const Title = styled.h1`
  font-family: SF Pro Display;
  font-size: 96px;
  line-height: 110%;
  letter-spacing: 0.01em;
`;

const Description = styled.h4`
  font-family: SF Pro Text;
  font-size: 28px;
  line-height: 150%;
  opacity: 0.8;
`;

const NextContainer = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(70px);
  border-radius: 16px 0px 0px 16px;
`;

const MetaData = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: #ffffff;
  padding: 48px 0 48px 36px;
`;

const NextTitle = styled.h3`
  font-family: SF Pro Text;
  font-size: 36px;
  line-height: 135%;
`;

const Arrow = styled.div`
  opacity: 0.5;
`;

const Next = styled.div`
  font-family: SF Pro Display;
  font-size: 20px;
  line-height: 20px;
  mix-blend-mode: normal;
  opacity: 0.5;
`;

const NextImage = styled.div`
  width: 40%;
  background-image: url("/images/nextImage.png");
  background-size: cover;
  background-position: center center;
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
          <Arrow>-></Arrow>
        </MetaData>
        <NextImage></NextImage>
      </NextContainer>
    </Container>
  );
}

export default Banner;
