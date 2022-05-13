import axios from "axios";

const BASE_URL =
  "https://react-native-course-5e3fc-default-rtdb.firebaseio.com";

export function storeAppliedSchemes(uid, scheme) {
  axios.put(BASE_URL + `/users/${uid}/applied/${scheme.name}.json`, scheme);
}

export async function fetchAppliedSchemes(uid) {
  const response = await axios.get(BASE_URL + `/users/${uid}/applied.json`);
  return response.data;
}


