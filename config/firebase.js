import { getApps, initializeApp } from "firebase/app";
import { LogBox } from "react-native";

const firebaseConfig = {
  apiKey: "AIzaSyCvWE4F1o5Tq7w9chrwGCR5tKhjP6b8d0E",
  authDomain: "react-native-course-5e3fc.firebaseapp.com",
  databaseURL: "https://react-native-course-5e3fc-default-rtdb.firebaseio.com",
  projectId: "react-native-course-5e3fc",
  storageBucket: "react-native-course-5e3fc.appspot.com",
  messagingSenderId: "547797845184",
  appId: "1:547797845184:web:ab4a939bfd0440c1fa5925",
};

// Editing this file with fast refresh will reinitialize the app on every refresh, let's not do that
// if (!getApps().length) {
export const firebaseApp = initializeApp(firebaseConfig);
// }

// Firebase sets some timeers for a long period, which will trigger some warnings. Let's turn that off for this example
LogBox.ignoreLogs([`Setting a timer for a long period`]);
