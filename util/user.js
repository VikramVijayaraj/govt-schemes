import axios from "axios";

const BASE_URL =
  "https://react-native-course-5e3fc-default-rtdb.firebaseio.com/";

export function storeUser(userData) {
  // post will auto generate id, so use put
  console.log("HTTP");
  console.log(userData);
  console.log(userData.uid);
  axios.put(BASE_URL + `/users/${userData.uid}.json`, userData);
}

export async function fetchUser(uid) {
  console.log(uid);
  const response = await axios.get(BASE_URL + `/users/${uid}.json`);
  console.log("Fetched");
  console.log(response.data);
  return response.data;
}
