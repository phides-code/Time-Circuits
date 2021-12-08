import React, { createContext, useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const { user, isAuthenticated, isLoading } = useAuth0();

  useEffect(() => {
    console.log(`running Context useEffect...`);
    if (isAuthenticated) {
      console.log(`got authenticated user. putting in currentUser state...`);
      setCurrentUser(user);
      sendUserToDb();
    }
  }, [isAuthenticated]);

  const sendUserToDb = async () => {
    const res = await fetch(`/api/userlogin`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...user }),
    });
    const data = await res.json();
    console.log(`got data: `);
    console.log(data);
  };

  return (
    <UserContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        user,
        isAuthenticated,
        isLoading,
        sendUserToDb,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
