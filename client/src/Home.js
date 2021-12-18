import React from "react";
import styled from "styled-components";
import Keypad from "./Keypad";
import TimeCircuits from "./TimeCircuits";
import Accelerometer from "./Accelerometer";

const Home = () => {
  return (
    <Wrapper>
      <InnerWrapper>
        <Accelerometer></Accelerometer>
        <TimeCircuits />
      </InnerWrapper>
      <Keypad />
    </Wrapper>
  );
};

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

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
