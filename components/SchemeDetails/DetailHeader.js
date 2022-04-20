import { View, StyleSheet, Image } from "react-native";

import colors from "../../config/colors";
import Title from "../UI/Title";
import Text from "../UI/Text";

export default function DetailHeader() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../../assets/images/emblem.png")}
      />
      <Title style={styles.title}>
        Distribution of Certified Seeds of maize
      </Title>
      <Text style={styles.text}>
        Agriculture and Farmers Welfare department
      </Text>
      <Text style={styles.text}>Posted on 3 March 2022</Text>
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
