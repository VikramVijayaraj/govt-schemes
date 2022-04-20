import { View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../../config/colors";

export default function LoginProviders() {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons
        style={styles.icon}
        name="google"
        size={30}
        color={colors.google}
      />
      <MaterialCommunityIcons
        style={styles.icon}
        name="apple"
        size={30}
        color={colors.apple}
      />
      <MaterialCommunityIcons
        style={styles.icon}
        name="facebook"
        size={30}
        color={colors.facebook}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    padding: 10,
  },
  icon: {
    paddingHorizontal: 20,
  },
});
