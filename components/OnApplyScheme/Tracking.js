import { View, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import Text from "../UI/Text";
import colors from "../../config/colors";

export default function Tracking() {
  return (
    <View style={styles.container}>
      <Text>Application Status</Text>

      <View style={styles.stage}>
        <FontAwesome name="dot-circle-o" size={20} color={colors.gray800} />
        <Text style={styles.stageText}>Application submitted</Text>
      </View>

      <View style={styles.stage}>
        <FontAwesome name="dot-circle-o" size={20} color={colors.gray800} />
        <Text style={styles.stageText}>VO office</Text>
      </View>

      <View style={styles.stage}>
        <FontAwesome name="circle-o" size={20} color={colors.gray800} />
        <Text style={styles.stageText}>Application approved</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  stage: {
    flexDirection: "row",
    marginTop: 20,
    marginBottom: 30,
  },
  stageText: {
    marginLeft: 20,
    fontWeight: "bold",
  },
});
