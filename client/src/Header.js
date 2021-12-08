import React, { useContext } from "react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import { UserContext } from "./UserContext";

const Header = () => {
  const { isAuthenticated } = useContext(UserContext);
  return (
    <div>
      {isAuthenticated ? (
        <div>
          <LogoutButton />
        </div>
      ) : (
        <div>
          <LoginButton />
        </div>
      )}
    </div>
  );
};

export default Header;
