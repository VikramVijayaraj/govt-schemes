import { View, StyleSheet, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import colors from "../../config/colors";

export default function SeachBar() {
  return (
    <View style={styles.container}>
      <Ionicons style={styles.icon} name="search-outline" size={20} />
      <TextInput style={styles.input} placeholder="Search schemes!" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.gray100,
    height: 40,
    borderRadius: 10,
    padding: 10,
    marginHorizontal: 20,
  },
  icon: {
    marginRight: 8,
    color: colors.gray800,
  },
  input: {
    color: colors.gray700,
  },
});
