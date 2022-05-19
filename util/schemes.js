import axios from "axios";

// const BASE_URL =
  // "https://react-native-course-5e3fc-default-rtdb.firebaseio.com";

const BASE_URL =
  "https://schemes-8c091-default-rtdb.firebaseio.com";

export async function fetchSchemes(state) {
  const response = await axios.get(BASE_URL + `/schemes/${state}.json`);
  return response.data;
}


