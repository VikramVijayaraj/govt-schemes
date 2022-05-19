import { useContext } from "react";
import { View, StyleSheet } from "react-native";

import colors from "../../config/colors";
import { FilterContext } from "../../store/filter-context";
import Text from "../UI/Text";

export default function Beneficiary() {
  const filterCtx = useContext(FilterContext);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{filterCtx.beneficiary}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginRight: 10,
  },
  text: {
    color: colors.primary800,
  },
});
