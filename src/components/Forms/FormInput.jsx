import { View, TextInput, StyleSheet } from 'react-native'

// Creo un componente input para poder reutilizar sus estilos en login y registro
export default function FormInput({ type = 'default', placeHolder, ...props }) {
  return (
    <View>
      <TextInput
        style={styles.input}
        keyboardType={type}
        placeholder={placeHolder}
        {...props}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  input: {
    width: '100%',
    padding: 12,
    marginBottom: 12,
    backgroundColor: '#eee'
  }
})