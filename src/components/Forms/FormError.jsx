import { Text, StyleSheet } from "react-native";

// Creamos un componente FormError para mostrar cuando un input es invalido
export default function FormError({ children }) {
  return (
    <Text style={styles.error}>{children}</Text>
  )
}

const styles = StyleSheet.create({
  error: {
    color: 'red',
    fontWeight: 'bold',
    marginBottom: 8,
  }
})