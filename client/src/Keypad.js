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
      <SideButtons>
        <RedButton />
        <OrangeButton />
        <GreenButton />
        <GreyButton />
        <GreyButton />
      </SideButtons>
      <InnerWrapper>
        {keys &&
          keys.map((key) => {
            return (
              <KeyDiv key={key}>
                <Key>{key}</Key>
              </KeyDiv>
            );
          })}
      </InnerWrapper>
    </Wrapper>
  );
};

const SideButtons = styled.div`
  background: seashell;
`;
const SideButton = styled.div`
  width: 34px;
  height: 34px;
  border-radius: 25%;
  background: red;
  margin: 5px 10px 5px 10px;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 50px;
`;

const RedButton = styled(SideButton)``;
const OrangeButton = styled(SideButton)``;
const GreenButton = styled(SideButton)``;
const GreyButton = styled(SideButton)``;

const InnerWrapper = styled.div`
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
