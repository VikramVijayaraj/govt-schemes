import { StyleSheet, View } from "react-native";

import DetailCard from "./DetailCard";

export default function DetailList({
  beneficiary,
  benefits,
  docs,
  description,
}) {
  return (
    <View style={styles.container}>
      <DetailCard title="Beneficiary" desc={beneficiary} />
      <DetailCard title="Benefits" desc={benefits} />
      <DetailCard title="Documents required" desc={docs} />
      <DetailCard title="Description" desc={description} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: "white",
    paddingHorizontal: 20,
    marginBottom: 70,
    marginTop: 10,
  },
});
