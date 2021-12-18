import React, { useContext } from "react";
import { UserContext } from "./UserContext";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useContext(UserContext);

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <>
      {isAuthenticated && (
        <div>
          <div>
            <img src={user.picture} alt={user.name} />
            <h2>{user.name}</h2>
            <p>{user.email}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Profile;
