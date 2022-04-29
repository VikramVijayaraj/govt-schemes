import { View, StyleSheet, Image } from "react-native";

import colors from "../../config/colors";
import Title from "../UI/Title";
import Text from "../UI/Text";

export default function DetailHeader({ title, subtitle, date }) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../../assets/images/emblem.png")}
      />
      <Title style={styles.title}>{title}</Title>
      <Text style={styles.text}>{subtitle}</Text>
      <Text style={styles.text}>Posted on {date}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 100,
    backgroundColor: colors.primary400,
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
  },
  image: {
    width: 80,
    height: 80,
  },
  title: {
    color: colors.gray100,
  },
  text: {
    color: colors.gray300,
  },
});
