import { useState, createContext, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const getStoredUser = async () => {
    try {
      const stored = await AsyncStorage.getItem("user");
      const storedUser = JSON.parse(stored);
      if (storedUser) {
        setUser(storedUser);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getStoredUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
export default UserContext;
