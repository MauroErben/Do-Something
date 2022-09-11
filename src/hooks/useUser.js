import { useContext } from "react";
import UserContext from "../context/UserContext";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";

export const useUser = () => {
  const navigation = useNavigation();

  const { user, setUser } = useContext(UserContext);

  const signUp = async (data) => {
    try {
      await AsyncStorage.setItem("user", JSON.stringify(data)); // Almaceno el usuario en la memoria del dispositivo
      setUser(data);
      Alert.alert("Success", "Successfully registered")
      navigation.reset({ // utilizo reset para que al momento de loguear se resetee la pila de navegacion y no podamos volver a la pantalla de registro
        index: 0,
        routes: [{ name: "Home" }]
      });
    } catch (error) {
      console.log(error);
    }
  };

  const logIn = (data) => {
    if (!user) {
      return Alert.alert("Error", "User not found, please create an account")
    }
    const { email, password } = user;
    if (data.email === email && data.password === password) {
      navigation.reset({
        index: 0,
        routes: [{ name: "Home" }]
      });
    } else {
      Alert.alert("Error", "Worng username or password")
    }
  };

  return { user, signUp, logIn };
};
