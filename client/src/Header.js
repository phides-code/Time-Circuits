import React, { useContext } from "react";
import { Link } from "react-router-dom";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import { UserContext } from "./UserContext";

const Header = () => {
  const { isAuthenticated } = useContext(UserContext);
  return (
    <div>
      <Link to="/">Go Home</Link>
      {isAuthenticated ? (
        <div>
          <Link to="/profile">Go to Profile</Link>
          <div>
            <LogoutButton />
          </div>
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
