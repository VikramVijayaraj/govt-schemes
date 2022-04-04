import { Image, View, Text, StyleSheet } from "react-native";

import colors from "../config/colors";
import Login from "../components/login";

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <Login />
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
