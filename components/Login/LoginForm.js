import { View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import Input from "../UI/Input";
import colors from "../../config/colors";

export default function LoginForm() {
  return (
    <View style={styles.container}>
      <Input
        label="Email"
        placeholder="Enter Email"
        icon={
          <Ionicons name="mail-outline" size={20} color={colors.primary400} />
        }
      />
      <Input
        style={styles.inputContainer}
        label="Password"
        placeholder="Enter Password"
        icon={
          <Ionicons
            name="lock-closed-outline"
            size={20}
            color={colors.primary400}
          />
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    // backgroundColor: 'gold'
  },
  inputContainer: {
    borderRadius: 10,
  },
});
