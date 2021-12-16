import React, { useContext } from "react";
import { Link } from "react-router-dom";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import { UserContext } from "./UserContext";
import styled from "styled-components";

const Header = () => {
  const { isAuthenticated } = useContext(UserContext);
  return (
    <Wrapper>
      <HeaderLink>
        <Link to="/">Go Home</Link>
      </HeaderLink>

      {isAuthenticated ? (
        <>
          <HeaderLink>
            <Link to="/profile">Go to Profile</Link>
          </HeaderLink>

          <HeaderLink>
            <LogoutButton />
          </HeaderLink>
        </>
      ) : (
        <HeaderLink>
          <LoginButton />
        </HeaderLink>
      )}
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const HeaderLink = styled.div`
  margin: 0px 10px;
`;
export default Header;
