import axios from "axios";

const BASE_URL =
  "https://react-native-course-5e3fc-default-rtdb.firebaseio.com/schemes";

export async function fetchSchemes(state) {
  const response = await axios.get(BASE_URL + `/${state}.json`);
  return response.data;
}
