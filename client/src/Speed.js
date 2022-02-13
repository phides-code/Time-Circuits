import React from "react";
import styled from "styled-components";

const Speed = ({ speed }) => {
  return (
    <SpeedDiv>
      {speed < 10 ? <>{"0" + speed.toString()}</> : <>{speed}</>}
    </SpeedDiv>
  );
};

const SpeedDiv = styled.div`
  font-size: 50px;
  font-family: "Digital-7 Italic";
  color: tomato;
  border: 2px solid grey;
  margin-bottom: 20px;
  min-width: 50px;
  text-shadow: 0 0 42px tomato, 0 0 82px tomato, 0 0 92px tomato;
`;

export default Speed;
