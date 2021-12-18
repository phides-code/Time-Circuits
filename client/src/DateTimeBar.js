import React from "react";
import styled from "styled-components";
import moment from "moment";

const DateTimeBar = ({ label, color, date, blink }) => {
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
        <Ampm>
          <RedLabel>AM</RedLabel>
          <AmpmLed
            className={moment(dateObj).format("a") !== "am" && "off"}
            style={{
              background: `${color}`,
              boxShadow: `0 0 42px ${color}, 0 0 82px ${color}, 0 0 92px ${color}`,
            }}
          />
          <RedLabel>PM</RedLabel>
          <AmpmLed
            className={moment(dateObj).format("a") !== "pm" && "off"}
            style={{
              background: `${color}`,
              boxShadow: `0 0 42px ${color}, 0 0 82px ${color}, 0 0 92px ${color}`,
            }}
          />
        </Ampm>

        <Hour>{moment(dateObj).format("hh")}</Hour>
        <Blinkers>
          <Led
            className={blink && "off"}
            style={{
              background: `${color}`,
              boxShadow: `0 0 42px ${color}, 0 0 82px ${color}, 0 0 92px ${color}`,
            }}
          />
          <Led
            className={blink && "off"}
            style={{
              background: `${color}`,
              boxShadow: `0 0 42px ${color}, 0 0 82px ${color}, 0 0 92px ${color}`,
            }}
          />
        </Blinkers>
        <Min>{moment(dateObj).format("mm")}</Min>
      </DateTime>
      <BlackLabel>{label}</BlackLabel>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  text-align: center;
  border-bottom: 10px solid dimgray;
`;

const Ampm = styled.div`
  position: relative;
  bottom: 5px;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
  align-content: stretch;
`;

const RedLabel = styled.div`
  font-family: "Eurostile Extended";
  position: relative;
  font-size: small;
  padding: 0px 5px;
  background: #800020;
  color: white;
`;

const BlackLabel = styled.div`
  font-family: "Eurostile Extended";
  margin: 5px 0px;
  display: inline-block;
  background: black;
  color: white;
  padding: 2px 15px;
  font-size: 16px;
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
  width: 132px;
`;
const Hour = styled(DateTimeValue)`
  width: 67px;
`;
const Min = styled(DateTimeValue)`
  width: 67px;
`;
const Blinkers = styled.div`
  margin-top: 5px;
`;

const Led = styled.div`
  margin-top: 8px;
  height: 13px;
  width: 13px;
  border-radius: 50%;
  &.off {
    filter: brightness(25%);
  }
`;

const AmpmLed = styled(Led)`
  margin: 3px 0px;
`;

export default DateTimeBar;
