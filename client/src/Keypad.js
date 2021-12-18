import React, { useContext, useState } from "react";
import styled from "styled-components";
import { TimeContext } from "./TimeContext";

const Keypad = () => {
  const [keyTime, setKeyTime] = useState("");

  const { destinationTime, setDestinationTime } = useContext(TimeContext);

  const keysArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  return (
    <Wrapper>
      <SideButtons>
        <RedButton
          onClick={() => {
            setKeyTime("");
          }}
        />
        <OrangeButton />
        <GreenButton
          onClick={() => {
            if (keyTime.length === 12) {
              setDestinationTime(keyTime);
              setKeyTime("");
            }
          }}
        />
        <GreyButton />
        <GreyButton />
      </SideButtons>
      <InnerWrapper>
        {keysArr.map((key) => {
          return (
            <KeyDiv key={key}>
              <Key
                onClick={() => {
                  if (keyTime.length < 12) {
                    setKeyTime(keyTime + key);
                  }
                }}
              >
                {key}
              </Key>
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
const SideButton = styled.button`
  display: flex;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  margin: 5px 10px 5px 10px;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 50px;
`;

const RedButton = styled(SideButton)`
  background: red;
`;
const OrangeButton = styled(SideButton)`
  background: orange;
`;
const GreenButton = styled(SideButton)`
  background: green;
`;
const GreyButton = styled(SideButton)`
  background: dimgray;
`;

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
