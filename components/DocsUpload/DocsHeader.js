import { View, StyleSheet } from "react-native";

import Title from "../UI/Title";
import Text from "../UI/Text";

export default function DocsHeader() {
  return (
    <View style={styles.header}>
      <Title style={styles.title}>Upload Files</Title>
      <Text style={styles.subtitle}>
        Upload required documents to apply for schemes.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    alignItems: "center",
    paddingVertical: 20,
  },
  title: {
    textTransform: "uppercase",
  },
  subtitle: {
    paddingVertical: 10,
    paddingHorizontal: 60,
    textAlign: "center",
  },
});
