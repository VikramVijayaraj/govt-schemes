import { StyleSheet } from "react-native";

import Card from "../UI/Card";
import Text from "../UI/Text";

export default function DetailCard({ title, desc }) {
  return (
    <Card style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.desc}>{desc}</Text>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    marginVertical: 5,
  },
  title: {
    marginVertical: 10,
    fontFamily: "work-sans-bold",
  },
  desc: {
    marginBottom: 10,
  },
});
