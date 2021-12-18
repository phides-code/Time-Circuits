import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import metalbackground from "./images/metal.jpg";
import RedLabels from "./RedLabels";
import DateTimeBar from "./DateTimeBar";
import moment from "moment";
import { TimeContext } from "./TimeContext";

const TimeCircuits = () => {
  const { currentDate, setCurrentDate, destinationTime, setDestinationTime } =
    useContext(TimeContext);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    const myInterval = setInterval(() => {
      setCurrentDate(moment(new Date()).format("YYYYMMDDHHmm"));
      setBlink(!blink);
    }, 500);

    return () => {
      clearInterval(myInterval);
    };
  });

  return (
    <Wrapper>
      <RedLabels />
      <DateTimeBar
        color={"tomato"}
        label={"DESTINATION " + "\xa0\xa0" + "  TIME"}
        date={destinationTime}
        blink={blink}
      />

      <RedLabels />
      <DateTimeBar
        color={"lime"}
        label={"PRESENT " + "\xa0\xa0" + "  TIME"}
        date={currentDate}
        blink={blink}
      />

      <RedLabels />
      <DateTimeBar
        color={"orange"}
        label={"LAST " + "\xa0\xa0" + " TIME " + "\xa0\xa0" + " DEPARTED "}
        date={"195511122204"}
        blink={blink}
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
