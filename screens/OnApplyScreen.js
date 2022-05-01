import { useContext, useEffect } from "react";
import { View, StyleSheet, ScrollView } from "react-native";

import AcknowledgeHeader from "../components/OnApplyScheme/AcknowledgeHeader";
import Tracking from "../components/OnApplyScheme/Tracking";
import { AppliedContext } from "../store/applied-context";
import { UserContext } from "../store/user-context";
import { storeAppliedSchemes } from "../util/applied";

export default function OnApplyScreen({ route }) {
  const { userData } = useContext(UserContext);
  const appliedCtx = useContext(AppliedContext);
  // console.log(appliedCtx.schemes);

  const data = route.params.schemeDetails;

 

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
