import { StatusBar } from "expo-status-bar";
import { View } from "react-native";

import LoginScreen from "./app/screens/LoginScreen";

export default function App() {
  return (
    <>
      <StatusBar style="auto" />

      <LoginScreen />
    </>
  );
}
