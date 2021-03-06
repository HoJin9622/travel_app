import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 42px 240px 0 240px;
  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 10px 0 0 0;
  }
`;

const NavigationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 0 29px 0;

  @media only screen and (max-width: 768px) {
    padding: 0 0 5px 0;
  }
`;

const SideNavi = styled.div`
  display: flex;
  justify-content: space-between;
  width: 15%;

  @media only screen and (max-width: 768px) {
    width: 30%;
  }
`;

const Title = styled.h1`
  font-family: 'Karla', sans-serif;
  font-weight: bold;
  font-size: 24px;
  line-height: 29px;
  letter-spacing: 0.01em;
  color: #ffffff;
  cursor: pointer;

  @media only screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

const NaviLetter = styled.h4`
  font-family: 'Karla', sans-serif;
  font-size: 18px;
  line-height: 21px;
  color: #ffffff;
  cursor: pointer;

  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const NavigationBottomLine = styled.div`
  width: 100%;
  height: 2px;
  background: #e7e7f2;
  opacity: 0.4;
  backdrop-filter: blur(60px);
  /* Note: backdrop-filter has minimal browser support */
  transform: matrix(1, 0, 0, -1, 0, 0);
`;

function Navigation() {
  return (
    <Container>
      <NavigationContainer>
        <SideNavi>
          <NaviLetter>About</NaviLetter>
          <NaviLetter>Contact</NaviLetter>
        </SideNavi>
        <Title>Camping.</Title>
        <SideNavi>
          <NaviLetter>Sign In</NaviLetter>
          <NaviLetter>Sign Up</NaviLetter>
        </SideNavi>
      </NavigationContainer>
      <NavigationBottomLine />
    </Container>
  );
}

export default Navigation;
