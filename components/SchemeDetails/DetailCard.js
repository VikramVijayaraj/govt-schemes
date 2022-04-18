import { StyleSheet } from "react-native";

import Card from "../UI/Card";
import Text from "../UI/Text";

export default function DetailCard({ title, desc }) {
  return (
    <Card>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.desc}>{desc}</Text>
    </Card>
  );
}

const styles = StyleSheet.create({
  title: {
    marginVertical: 10,
    fontFamily: "work-sans-bold",
  },
  desc: {
    marginBottom: 10,
  },
});
