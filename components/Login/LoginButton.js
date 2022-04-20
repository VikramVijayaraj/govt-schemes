import { View, StyleSheet, Pressable } from "react-native";

import colors from "../../config/colors";
import Text from "../UI/Text";

export default function LoginButton() {
  return (
    <Pressable style={styles.container}>
      <Text style={styles.text}>Login</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary800,
    marginHorizontal: 60,
    marginVertical: 20,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    elevation: 4,
  },
  text: {
    fontSize: 25,
    color: colors.gray100,
  },
});
