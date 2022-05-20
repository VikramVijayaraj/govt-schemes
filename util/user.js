import axios from "axios";

const BASE_URL =
  "https://react-native-course-5e3fc-default-rtdb.firebaseio.com";

export function storeUser(userData) {
  // post will auto generate id, so use put
  axios.put(BASE_URL + `/users/${userData.uid}.json`, userData);
}

export async function fetchUser(uid) {
  const response = await axios.get(BASE_URL + `/users/${uid}.json`);
  return response.data; 
}

export function updateUser(uid, folder, userData) {
  return axios.put(
    BASE_URL + `/users/${uid}/documents/${folder}.json`,
    userData
  );
}

export function addUserAvatar(uid, avatarData) {
  return axios.put(BASE_URL + `/users/${uid}/avatar.json`, avatarData);
}

export async function fetchUserAvatar(uid) {
  const response = await axios.get(BASE_URL + `/users/${uid}/avatar.json`);
  return response.data;
}
