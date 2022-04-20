import { useContext } from "react";
import { View, StyleSheet } from "react-native";

import { SchemesCountContext } from "../../store/schemes-count-context";
import Text from "../UI/Text";

export default function SchemesCount() {
  const countCtx = useContext(SchemesCountContext);

  return (
    <View style={styles.container}>
      <Text>{countCtx.count} SCHEMES FOUND</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
