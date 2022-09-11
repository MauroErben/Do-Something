import { useContext, useState } from "react";
import { useEffect } from "react";
import { getRandomActivity, getImageByType, getActivityByType, getActivityByParticipants } from "../services/ActivityService";
import ActivityContext from "../context/ActivityContext";
import { Alert } from "react-native";
import Toast from "react-native-root-toast";

export const useActivity = () => {
  const [loading, setLoading] = useState(false);

  const {
    activityDetails,
    activityToMake,
    setActivityDetails,
    setActivityToMake,
  } = useContext(ActivityContext);

  const addActivityToMake = (activity) => {
    const repeatActivity = activityToMake.find((item) => item.key === activity.key)
    if (repeatActivity) {
      return Alert.alert("Error", "Activity already exists");
    }
    setActivityToMake((prevActivity) => [...prevActivity, activity]);
    Toast.show('Activity added', { duration: Toast.durations.SHORT })
  };

  // Elimino una activdad por su id
  const deleteActivityToMake = (id) => {
    const filter = activityToMake.filter((activity) => id !== activity.key);
    setActivityToMake(filter);
    Toast.show('Activity deleted', { duration: Toast.durations.SHORT }) //Este toast es compatible en android e ios
  };

  // Obtengo una imagen segun el type de la actividad que sea
  const getImageActivity = async (activityResponse) => {
    const newActivity = { ...activityResponse }
    try {
      const response = await getImageByType(activityResponse?.type)
      newActivity.image = response.data[0].images.original.url;
      return newActivity;
    } catch (error) {
      console.log(error);
    }
  }

  // Obtengo todos los detalles de la actividad
  const getActivity = async () => {
    setLoading(true);
    try {
      const response = await getRandomActivity();
      const activity = await getImageActivity(response);
      setActivityDetails(activity);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  // Obtenemos una activity filtrada por type
  const getActivityType = async (value) => {
    setLoading(true);
    try {
      const response = await getActivityByType(value);
      const activity = await getImageActivity(response);
      setActivityDetails(activity);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  // Obtenemos una activity filtrada por participants
  const getActivityParticipants = async (value) => {
    setLoading(true);
    try {
      const response = await getActivityByParticipants(value);
      if (response.error) {
        Alert.alert("Error", `No activity found with ${value} participants`);
        setLoading(false);
        return;
      }
      const activity = await getImageActivity(response);
      setActivityDetails(activity);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  const refreshActivity = () => {
    getActivity();
  };

  useEffect(() => {
    getActivity();
  }, [activityToMake]); // agregamos activityToMake como dependencia para que cuando agreguemos una activityToMake renderize y nos obtenga una nueva actividad

  return {
    loading,
    activityDetails,
    refreshActivity,
    activityToMake,
    addActivityToMake,
    deleteActivityToMake,
    getActivityType,
    getActivityParticipants
  };
};
