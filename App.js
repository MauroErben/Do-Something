import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/screens/Home";
import Login from "./src/screens/Login";
import SignUp from "./src/screens/SignUp";
import ActivitiesTodo from "./src/screens/Activities";
import { UserProvider } from "./src/context/UserContext";
import { ActivitiesProvider } from "./src/context/ActivityContext";
import { RootSiblingParent } from 'react-native-root-siblings'; // Esto es para poder utilizar una libreria para mostrar un Toast compatible con android e ios

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <RootSiblingParent>
        <UserProvider>
          <ActivitiesProvider>
            <Stack.Navigator initialRouteName="Login">
              <Stack.Screen
                name="Home"
                component={Home}
                options={{ headerBackVisible: false }} // Deshabilito el boton de volver atras para que no se pueda volver al login si ya estas autenticado
              />
              <Stack.Screen
                name="Login"
                component={Login}
              />
              <Stack.Screen
                name="SignUp"
                component={SignUp}
              />
              <Stack.Screen
                name="Activities"
                component={ActivitiesTodo}
                options={{ title: 'Activities to do' }}
              />
            </Stack.Navigator>
          </ActivitiesProvider>
        </UserProvider>
      </RootSiblingParent>
    </NavigationContainer>
  );
}
