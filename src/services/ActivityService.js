import axios from "axios";

const API_KEY = "2cZkiFTqyiS79UdSapL6LHWlublpl7iy"; // No es buena idea tener la key aca pero la dejo para que les funcionen las imagenes en la prueba del proyecto.
const ACTIVITY_ENDPOINT = "http://www.boredapi.com/api/activity";
const IMAGE_ENDPOINT = "https://api.giphy.com/v1/gifs";

export const getActivityByType = (value) => {
  return axios
    .get(`${ACTIVITY_ENDPOINT}?type=${value}`)
    .then((res) => {
      return res.data;
    })
    .catch((error) => console.log(error));
}

export const getActivityByParticipants = (value = "1") => {
  return axios
    .get(`${ACTIVITY_ENDPOINT}?participants=${value}`)
    .then((res) => {
      return res.data;
    })
    .catch((error) => console.log(error));
}

export const getRandomActivity = () => {
  return axios
    .get(ACTIVITY_ENDPOINT)
    .then((res) => {
      return res.data;
    })
    .catch((error) => console.log(error));
};

export const getImageByType = (type) => {
  return axios
    .get(`${IMAGE_ENDPOINT}/search?api_key=${API_KEY}&q=${type}`)
    .then((res) => {
      return res.data;
    })
    .catch((error) => console.log(error));
};
