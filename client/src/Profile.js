import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "./UserContext";
import styled from "styled-components";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useContext(UserContext);
  const [myArray, setMyArray] = useState(null);

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

const Wrapper = styled.div`
  padding: 20px;
  background-color: lightblue;
  margin-left: 50px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 500px;
`;

const Element = styled.div`
  height: 20px;
  min-width: 88px;
  border: 1px solid grey;
  margin: 5px;
`;

export default Profile;
