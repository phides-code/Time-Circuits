import React, { useContext } from "react";
import { UserContext } from "./UserContext";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useContext(UserContext);

  console.log(user);

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
    )
  );
};

export default Profile;
