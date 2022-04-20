import axios from "axios";

const API_KEY = "AIzaSyCvWE4F1o5Tq7w9chrwGCR5tKhjP6b8d0E";

async function authenticate(mode, email, password) {
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;

  const response = await axios.post(url, {
    email: email,
    password: password,
    returnSecureToken: true,
  });

  const token = response.data.idToken;
  const userEmail = response.data.email;
  const uId = response.data.localId;

  console.log(userEmail, uId);

  return { token, userEmail, uId };
}

export function createUser(email, password) {
  return authenticate("signUp", email, password);
}

export function login(email, password) {
  return authenticate("signInWithPassword", email, password);
}
