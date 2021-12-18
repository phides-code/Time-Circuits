import React from "react";
import styled from "styled-components";

const Speed = ({ speed }) => {
  return <SpeedDiv>{speed}</SpeedDiv>;
};

const SpeedDiv = styled.div`
  font-size: 50px;
  font-family: "Digital-7 Italic";
  color: tomato;
  border: 2px solid grey;
  margin-bottom: 20px;
`;

export default Speed;
