import React from "react";
import styled from "styled-components";

const TimeCircuits = () => {
  return (
    <Wrapper>
      <RedLabels>
        <RedLabel>MONTH</RedLabel>
        <RedLabel>DAY</RedLabel>
        <RedLabelYear>YEAR</RedLabelYear>
        <RedLabel>HOUR</RedLabel>
        <RedLabel>MIN</RedLabel>
      </RedLabels>
      <DateTime>
        <Month>NOV</Month>
        <Day>05</Day>
        <Year>1955</Year>
        <Hour>06</Hour>
        <Min>00</Min>
      </DateTime>
      <BlackLabel>PRESENT TIME</BlackLabel>

      {/* 
      <div>PRESENT TIME</div>
      <div>LAST TIME DEPARTED</div> */}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: lightgrey;
  text-align: center;
  width: 600px;
`;

const RedLabels = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;
const RedLabel = styled.div`
  padding: 0px 5px;
  /* margin: 0px 25px; */
  background: red;
  color: white;
`;

const RedLabelYear = styled(RedLabel)`
  /* margin: 0px 50px; */
`;

const DateTime = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const DateTimeValue = styled.div`
  background: black;
  color: lightgreen;
  font-family: "Digital-7 Italic";
  font-size: 60px;
`;

const Month = styled(DateTimeValue)``;
const Day = styled(DateTimeValue)``;
const Year = styled(DateTimeValue)``;
const Hour = styled(DateTimeValue)``;
const Min = styled(DateTimeValue)``;

const BlackLabel = styled.div`
  margin: 5px 0px;
  display: inline-block;
  align-items: center;
  align-content: center;
  justify-content: center;
  background: black;
  color: white;
  text-align: center;
`;

export default TimeCircuits;
