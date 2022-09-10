import { View, Text, Image, Button, StyleSheet } from 'react-native'

export default function DetailActivity({ details, onAddActivity }) {

  return (
    <View style={styles.activityContainer}>
      <Image style={styles.image} source={{ uri: details.image }} />

      <Text style={styles.typeText}>Type: {details.type}</Text>
      <Text style={styles.activityText}>Activity: {details.activity}</Text>
      <Text style={styles.participantsText}>Participants: {details.participants}</Text>

      <View style={styles.buttonContainer}>
        <Button color="#3CCF4E" title="Add to list" onPress={onAddActivity} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  activityContainer: {
    width: '100%',
    backgroundColor: '#eee',
    borderRadius: 10,
    alignItems: 'center',
    padding: 8,
  },

  image: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    marginBottom: 8,
  },

  typeText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },

  activityText: {
    marginBottom: 8,
    textAlign: 'center',
  },

  participantsText: {
    marginBottom: 8,
    textAlign: 'center',
  },

  buttonContainer: {
    width: '100%',
    marginTop: 8,
  },
})