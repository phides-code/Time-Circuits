import React from "react";
import styled from "styled-components";

const RedLabels = () => {
  return (
    <Wrapper>
      <Month>MONTH</Month>
      <Day>DAY</Day>
      <Year>YEAR</Year>
      <Hour>HOUR</Hour>
      <Min>MIN</Min>
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
  font-family: "Eurostile Extended";
  font-size: small;
  position: relative;
  margin-bottom: 5px;
  padding: 2px 10px;
  background: #800020;
  color: white;
`;

const Month = styled(RedLabel)`
  right: 10px;
`;

const Day = styled(RedLabel)`
  right: 30px;
`;

const Year = styled(RedLabel)`
  right: 25px;
`;

const Hour = styled(RedLabel)`
  left: 15px;
`;

const Min = styled(RedLabel)`
  left: 8px;
`;

export default RedLabels;
