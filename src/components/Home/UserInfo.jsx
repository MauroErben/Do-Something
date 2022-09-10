import { View, Text, StyleSheet } from 'react-native'

export default function UserInfo({ user }) {
  return (
    <View style={styles.userInfoContainer}>
      <Text style={styles.textUserInfo}>¡Hello! {user.name}</Text>
      <Text style={styles.textUserInfo}>Your age: {user.age}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  userInfoContainer: {
    width: '100%',
    backgroundColor: '#eee',
    padding: 8,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 12,
  },
  textUserInfo: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 2,
  }
})