import { View, StyleSheet, ScrollView } from "react-native";

import AcknowledgeHeader from "../components/OnApplyScheme/AcknowledgeHeader";
import Tracking from "../components/OnApplyScheme/Tracking";

export default function OnApplyScreen() {
  return (
    <ScrollView style={styles.container}>
      <View>
        <AcknowledgeHeader />
        <Tracking />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    // paddingHorizontal: 20,
  },
});
