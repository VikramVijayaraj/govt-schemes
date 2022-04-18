import { StyleSheet } from "react-native";

import colors from "../../config/colors";
import Text from "./Text";

export default function Title({ children, style }) {
  return <Text style={[styles.title, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontFamily: "work-sans-bold",
    fontSize: 25,
    color: colors.gray800,
  },
});
