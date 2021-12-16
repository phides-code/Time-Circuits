import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Keypad = () => {
  const [keys, setKeys] = useState();

  useEffect(() => {
    const keysArr = [];

    for (let i = 1; i <= 10; i++) {
      if (i === 10) {
        keysArr.push(0);
      } else {
        keysArr.push(i);
      }
    }

    setKeys(keysArr);
  }, []);

  return (
    <Wrapper>
      {keys &&
        keys.map((key) => {
          return (
            <KeyDiv>
              <Key>{key}</Key>
            </KeyDiv>
          );
        })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: stretch;
  align-content: stretch;
  background: seashell;
  color: black;
  height: 200px;
  width: 180px;
  margin-top: 200px;
`;

const Key = styled.button`
  height: 100%;
  box-shadow: 4px 4px rgba(150, 150, 150, 0.4);
`;

const KeyDiv = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  margin: 5px;
  width: 45px;
  text-align: center;
`;

export default Keypad;
