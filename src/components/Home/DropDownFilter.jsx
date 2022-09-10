import SelectDropdown from "react-native-select-dropdown";
import { View, StyleSheet } from "react-native";
import { types, participants } from "../../utils/filterTypes";

export default function Filter({ onFilterType, onFilterParticipants }) {
  return (
    <View style={styles.filterContainer}>
      <View>
        <SelectDropdown
          defaultButtonText="Types"
          buttonStyle={styles.buttonStyle}
          data={types.data.map((item) => item)}
          onSelect={onFilterType}
        />
      </View>

      <View>
        <SelectDropdown
          defaultButtonText="Participants"
          buttonStyle={styles.buttonStyle}
          data={participants.data.map((item) => item)}
          onSelect={onFilterParticipants}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  filterContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 12,
  },

  buttonStyle: {
    maxWidth: 150,
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderRadius: 10,
  },
})
