import { View, Text, Image, StyleSheet, Button } from "react-native";

export default function ListOfActities({ activities, onDelete }) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: activities.image }} />
      <View style={styles.detailsContainer}>
        <Text style={styles.item}>Type: {activities.type}</Text>
        <Text style={styles.item}>Activity: {activities.activity}</Text>
        <Text style={styles.item}>Participants: {activities.participants}</Text>
        <Button color="#EB1D36" title="Delete" onPress={onDelete} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#313552',
    marginVertical: 4,
    padding: 10,
    borderRadius: 10,
  },

  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain'
  },

  detailsContainer: {
    marginLeft: 8,
    maxWidth: 220,
    marginHorizontal: 4,
  },

  item: {
    fontSize: 16,
    marginVertical: 4,
    color: '#fff',
    fontWeight: 'bold',
  },
})