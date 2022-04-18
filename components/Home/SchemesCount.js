import { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { SchemesCountContext } from "../../context/schemes-count-context";

import Text from "../UI/Text";

export default function SchemesCount() {
  const { schemesCount, setSchemesCount } = useContext(SchemesCountContext);

  return (
    <View style={styles.container}>
      <Text>{schemesCount} SCHEMES FOUND</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
