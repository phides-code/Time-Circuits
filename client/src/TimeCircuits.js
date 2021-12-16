import React from "react";
import styled from "styled-components";
import metalbackground from "./images/metal.jpg";
import RedLabels from "./RedLabels";
import DateTimeBar from "./DateTimeBar";

const TimeCircuits = () => {
  return (
    <Wrapper>
      <RedLabels />
      <DateTimeBar
        color={"tomato"}
        label={"DESTINATION TIME"}
        date={"198512311221"}
      />

      <RedLabels />
      <DateTimeBar
        color={"lime"}
        label={"PRESENT TIME"}
        date={"198510261321"}
      />

      <RedLabels />
      <DateTimeBar
        color={"orange"}
        label={"LAST TIME DEPARTED"}
        date={"198510261321"}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-image: url(${metalbackground});
  width: 600px;
  margin-top: 20px;
  border: 1px solid lightgrey;
`;

export default TimeCircuits;
