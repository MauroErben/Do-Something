import { View, StyleSheet } from "react-native";
import Constants from "expo-constants";

// Creamos un contenedor que utilizaremos en toda la app
export default function Container({ children }) {
  return (
    <View style={styles.container}>{children}</View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    paddingHorizontal: 12,
    backgroundColor: "#fff"
  },
})