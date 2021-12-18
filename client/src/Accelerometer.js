import React, { useRef, useState } from "react";
import styled from "styled-components";
import Speed from "./Speed";

const Accelerometer = () => {
  const intervalRef = useRef(null);
  const [speed, setSpeed] = useState(0);

  const speedUp = () => {
    // if intervalRef currently set, clear it and set to null
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    // set new interval which increases the speed state
    intervalRef.current = setInterval(() => {
      setSpeed((speed) => {
        if (speed < 88) {
          return speed + 1;
        }
        clearInterval(intervalRef.current);
        intervalRef.current = null;
        return 88;
      });
    }, 100);
  };

  const slowDown = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    intervalRef.current = setInterval(() => {
      // if speed above 0, reduce by 1, else clear the interval
      setSpeed((speed) => {
        if (speed > 0) {
          return speed - 1;
        }
        clearInterval(intervalRef.current);
        intervalRef.current = null;
        return 0;
      });
    }, 200);
  };

  return (
    <Wrapper>
      <Speed speed={speed} />
      <button
        onMouseDown={() => {
          speedUp();
        }}
        onMouseUp={() => {
          slowDown();
        }}
      >
        Gas
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 20px;
`;

export default Accelerometer;
