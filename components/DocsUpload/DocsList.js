import { View, StyleSheet } from "react-native";

import colors from "../../config/colors";
import Card from "../UI/Card";
import Text from "../UI/Text";

const nameList = [];

export default function DocsList({ name }) {
  console.log(name);

  nameList.push(name);
  console.log(nameList);

  return (
    <View style={styles.container}>
      <Text style={styles.caption}>Uploaded files</Text>
      <View>
        {nameList.map((name, index) => (
          <Card>
            <Text key={index}>{name}</Text>
          </Card>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 7,
    marginTop: 20,
    // backgroundColor: "gold",
  },
  caption: {
    color: colors.gray700,
  },
});
