import UserInfo from "../../components/Home/UserInfo";
import DetailActivity from "../../components/Home/DetailActivity";
import { useActivity } from "../../hooks/useActivity";
import { StyleSheet, View, ScrollView, RefreshControl, Button, Text } from "react-native";
import { useUser } from '../../hooks/useUser';
import Container from '../../components/AppContainer';
import Filter from "../../components/Home/DropDownFilter";

export default function Home({ navigation }) {
  const { user } = useUser();

  const {
    loading,
    activityDetails,
    refreshActivity,
    addActivityToMake,
    getActivityType,
    getActivityParticipants } = useActivity();

  return (
    <Container>
      <ScrollView
        contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl // Utilizamos refresh control para actualizar la actividad al deslizar el dedo
            refreshing={loading}
            onRefresh={refreshActivity}
          />
        }
      >
        <UserInfo user={user} />
        <Text style={styles.textInfoUpdate}>Filter by</Text>
        <Filter
          onFilterType={(selectedValue) => getActivityType(selectedValue)}
          onFilterParticipants={(selectedValue) => getActivityParticipants(selectedValue)}
        />
        <DetailActivity details={activityDetails} onAddActivity={() => addActivityToMake(activityDetails)} />
        <View style={styles.activitiesButtonContainer}>
          <Button title='Activities to do' onPress={() => navigation.navigate("Activities")} />
        </View>
      </ScrollView>
    </Container>
  )
}

const styles = StyleSheet.create({

  textInfoUpdate: {
    fontSize: 14,
    marginBottom: 12,
  },

  scrollView: {
    flex: 1,
    alignItems: 'center',
  },

  activitiesButtonContainer: {
    width: '100%',
    marginTop: 12,
  }
})