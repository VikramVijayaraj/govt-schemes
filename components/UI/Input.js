import { View, TextInput, StyleSheet } from "react-native";

import colors from "../../config/colors";
import Text from "./Text";

export default function Input({
  label,
  placeholder,
  value,
  onChangeText,
  icon,
  otherProps,
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.input}>
        <TextInput
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          {...otherProps}
        />
        {icon}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.45,
    // width: "45%",
  },
  label: {
    marginBottom: 4,
    color: colors.gray800,
  },
  input: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    elevation: 4,
    borderRadius: 5,
    padding: 10,
    color: colors.gray900,
  },
});
