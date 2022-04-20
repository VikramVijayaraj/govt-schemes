import { View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import colors from "../../config/colors";
import Text from "../UI/Text";
import Title from "../UI/Title";

export default function AcknowledgeHeader() {
  return (
    <View style={styles.container}>
      <Ionicons name="checkmark-circle" size={50} color={colors.gray100} />
      <Title style={styles.title}>
        Your application has been submitted successfully!
      </Title>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.success,
    padding: 20,
    paddingTop: 100,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  title: {
    color: colors.gray100,
    marginVertical: 20,
    fontSize: 30,
  },
});
