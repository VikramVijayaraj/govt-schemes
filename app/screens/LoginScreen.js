import { Image, View, Text, StyleSheet } from "react-native";
import { useState } from "react";

import colors from "../config/colors";
import Login from "../components/login";
import Signup from "../components/signup";

export default function LoginScreen() {
  const [showLogin, setShowLogin] = useState(true);
  console.log(showLogin);
  function handlePress() {
    console.log("Triggering...");
    setShowLogin(!showLogin);
  }

  return (
    <View style={styles.container}>
      {showLogin ? (
        <Login onPress={handlePress} />
      ) : (
        <Signup onPress={handlePress} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light,
    // justifyContent: "center",
    alignItems: "center",
  },
});
