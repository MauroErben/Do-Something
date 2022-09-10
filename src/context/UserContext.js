import { useState, createContext, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getStoredUser = async () => {
      const stored = await AsyncStorage.getItem("user");
      const storedUser = JSON.parse(stored);
      if (!storedUser) {
        return setUser(null);
      }
      setUser(storedUser);
    };
    getStoredUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
export default UserContext;
