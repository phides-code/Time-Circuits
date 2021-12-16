import React from "react";
import styled from "styled-components";

const RedLabels = () => {
  return (
    <Wrapper>
      <RedLabel>MONTH</RedLabel>
      <RedLabel>DAY</RedLabel>
      <RedLabel>YEAR</RedLabel>
      <RedLabel>HOUR</RedLabel>
      <RedLabel>MIN</RedLabel>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const RedLabel = styled.div`
  margin-bottom: 5px;
  padding: 0px 5px;
  background: red;
  color: white;
`;

export default RedLabels;
