import { View, StyleSheet } from "react-native";

export default function Card({ children, style }) {
  return <View style={[styles.container, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    borderRadius: 15,
    backgroundColor: "white",
    elevation: 4,
    padding: 10,
  },
});
