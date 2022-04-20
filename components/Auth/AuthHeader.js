import { View, StyleSheet, Image } from "react-native";

import Text from "../UI/Text";
import Title from "../UI/Title";

export default function AuthHeader({ title, image }) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} resizeMode="contain" source={image} />
      <Title style={styles.title}>{title}</Title>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    alignSelf: "center",
    marginVertical: 20,
    textTransform: "uppercase",
  },
});
