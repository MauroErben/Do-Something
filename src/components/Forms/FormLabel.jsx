import { Text, StyleSheet } from 'react-native'

// Componente label para poder reutilizar sus estilos
export default function FormLabel({ children }) {
  return (
    <Text style={styles.label}>{children}</Text>
  )
}

const styles = StyleSheet.create({
  label: {
    color: '#000',
    fontWeight: 'bold',
    marginBottom: 8,
  }
})