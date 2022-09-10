import { useContext, useState } from "react";
import { useEffect } from "react";
import { getRandomActivity, getImageByType } from "../services/ActivityService";
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

  // Agrego una nueva actividad al estado
  const addActivityToMake = (activity) => {

    const repeatActivity = activityToMake.find((item) => item.key === activity.key) // buscamos en la lista de actividades y en caso de que ya exista la actividad con el mismo id, mostramos un mensaje de que ya existe esa actividad
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

  // Obtengo todos los detalles de la actividad
  const getActivity = () => {
    setLoading(true);
    getRandomActivity().then((res) => {
      const newActivity = { ...res }; // Realizo una copia de las actividades para poder insertarle la propiedad image al estado
      getImageByType(newActivity?.type).then((res) => {
        newActivity.image = res.data[0].images.original.url;
        setActivityDetails(newActivity);
        setLoading(false);
      });
    });
  };

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
  };
};
