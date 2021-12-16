import React from "react";
import styled from "styled-components";
import moment from "moment";

const DateTimeBar = ({ label, color, date }) => {
  const dateObj = new Date(
    date.slice(0, 4),
    date.slice(4, 6) - 1,
    date.slice(6, 8),
    date.slice(8, 10),
    date.slice(10, 12),
    0,
    0
  );

  return (
    <Wrapper>
      <DateTime
        style={{
          color: `${color}`,
          textShadow: `0 0 42px ${color}, 0 0 82px ${color}, 0 0 92px ${color}`,
        }}
      >
        <Month>{moment(dateObj).format("MMM")}</Month>
        <Day>{moment(dateObj).format("DD")}</Day>
        <Year>{moment(dateObj).format("YYYY")}</Year>
        {moment(dateObj).format("a")}
        <Hour>{moment(dateObj).format("hh")}</Hour>
        <Blinkers></Blinkers>
        <Min>{moment(dateObj).format("mm")}</Min>
      </DateTime>
      <BlackLabel>{label}</BlackLabel>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  text-align: center;
`;

const DateTime = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const DateTimeValue = styled.div`
  background: black;
  font-family: "Digital-7 Italic";
  font-size: 70px;
  padding: 0px 5px;
  height: 67px;
`;

const Month = styled(DateTimeValue)`
  width: 100px;
`;
const Day = styled(DateTimeValue)`
  width: 67px;
`;
const Year = styled(DateTimeValue)`
  width: 120px;
`;
const Hour = styled(DateTimeValue)`
  width: 67px;
`;
const Min = styled(DateTimeValue)`
  width: 67px;
`;
const Blinkers = styled.div``;

const BlackLabel = styled.div`
  margin: 5px 0px;
  display: inline-block;
  background: black;
  color: white;
  padding: 0px 5px;
`;

export default DateTimeBar;
