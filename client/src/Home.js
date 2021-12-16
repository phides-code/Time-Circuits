import React from "react";
import styled from "styled-components";
import Keypad from "./Keypad";
import TimeCircuits from "./TimeCircuits";

const Home = () => {
  return (
    <Wrapper>
      <TimeCircuits />
      <Keypad />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
  align-content: stretch;
  background: black;
  height: 100vh;
  color: white;
`;

export default Home;
