import { StyleSheet, View } from "react-native";

import DetailCard from "./DetailCard";

export default function DetailList() {
  return (
    <View style={styles.container}>
      <DetailCard
        title="Funding Pattern"
        desc="Lorem ipsum is placeholder text commonly used in the graphic, print, and
        publishing industries for previewing layouts and visual mockups."
      />
      <DetailCard
        title="Funding Pattern"
        desc="Lorem ipsum is placeholder text commonly used in the graphic, print, and
        publishing industries for previewing layouts and visual mockups."
      />
      <DetailCard
        title="Funding Pattern"
        desc="Lorem ipsum is placeholder text commonly used in the graphic, print, and
        publishing industries for previewing layouts and visual mockups."
      />
      <DetailCard
        title="Funding Pattern"
        desc="Lorem ipsum is placeholder text commonly used in the graphic, print, and
        publishing industries for previewing layouts and visual mockups."
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: "white",
    paddingHorizontal: 20,
    marginBottom: 70,
  },
});
