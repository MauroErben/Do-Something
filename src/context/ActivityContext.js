import { useState, createContext } from "react";

const ActivityContext = createContext();

export const ActivitiesProvider = ({ children }) => {
  const [activityToMake, setActivityToMake] = useState([]);
  const [activityDetails, setActivityDetails] = useState({});

  return (
    <ActivityContext.Provider
      value={{
        activityDetails,
        activityToMake,
        setActivityDetails,
        setActivityToMake,
      }}
    >
      {children}
    </ActivityContext.Provider>
  );
};

export default ActivityContext;
