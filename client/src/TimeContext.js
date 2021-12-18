import React, { createContext, useState } from "react";
import moment from "moment";

export const TimeContext = createContext();

export const TimeProvider = ({ children }) => {
  const [destinationTime, setDestinationTime] = useState("195511050600");
  const [currentDate, setCurrentDate] = useState(
    moment(new Date()).format("YYYYMMDDHHmm")
  );

  return (
    <TimeContext.Provider
      value={{
        destinationTime,
        setDestinationTime,
        currentDate,
        setCurrentDate,
      }}
    >
      {children}
    </TimeContext.Provider>
  );
};
