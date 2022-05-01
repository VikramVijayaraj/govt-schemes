import { useContext, useEffect } from "react";
import { View, StyleSheet } from "react-native";

import Text from "../components/UI/Text";
import List from "../components/Home/List";
import { AppliedContext } from "../store/applied-context";
import AppliedList from "../components/AppliedList/AppliedList";

export default function AppliedSchemesScreen() {
  const appliedCtx = useContext(AppliedContext);

  // useEffect(() => {
    // async getAppliedSchemes
  // }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>All Applied Schemes</Text>
      <AppliedList listItems={appliedCtx.schemes} />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 40,
  },
  heading: {
    paddingHorizontal: 20,
    marginVertical: 10,
  },
});
