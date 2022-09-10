import { Text, FlatList, StyleSheet } from "react-native";
import ListOfActities from "../../components/ListOfActivities";
import { useActivity } from "../../hooks/useActivity";
import Container from "../../components/AppContainer";

export default function ActivitiesTodo() {
  const { activityToMake, deleteActivityToMake } = useActivity()

  // Si no hay actividades para hacer retorno un texto
  if (activityToMake.length === 0) {
    return (
      <Container>
        <Text style={styles.textNoActivity}>No activities to make.</Text>
      </Container>
    )
  }
  // Si hay actividades entonces retorno una lista de actividades
  return (
    <Container>
      <FlatList
        data={activityToMake}
        renderItem={({ item }) => <ListOfActities activities={item} onDelete={() => deleteActivityToMake(item.key)} />}
      />
    </Container>
  )
}

const styles = StyleSheet.create({
  textNoActivity: {
    textAlign: 'center',
    fontSize: 18,
  }
})

