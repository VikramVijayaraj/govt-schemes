import { Text as NativeText, StyleSheet } from "react-native";

import colors from "../../config/colors";

export default function Text({ children, style }) {
  return <NativeText style={[styles.text, style]}>{children}</NativeText>;
}

const styles = StyleSheet.create({
  text: {
    fontFamily: "work-sans-regular",
    color: colors.gray800,
  },
});
