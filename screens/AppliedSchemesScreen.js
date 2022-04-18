import { View, StyleSheet } from "react-native";

import Text from "../components/UI/Text";
import appliedSchemes from "../data/applied-schemes";
import List from "../components/Home/List";

export default function AppliedSchemesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>All Applied Schemes</Text>
      <List listItems={appliedSchemes} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  heading: {
    paddingHorizontal: 20,
    marginVertical: 10,
  },
});
