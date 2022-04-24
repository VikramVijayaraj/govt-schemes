import { useContext, useEffect } from "react";
import { View, StyleSheet, ScrollView, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

import colors from "../../config/colors";
import Card from "../UI/Card";
import Title from "../UI/Title";
import Text from "../UI/Text";
import { SchemesCountContext } from "../../store/schemes-count-context";

// import { LogBox } from "react-native";
// LogBox.ignoreAllLogs(); //Ignore all log notifications

export default function List({ listItems, query, clearIcon }) {
  const countCtx = useContext(SchemesCountContext);

  useEffect(() => {
    countCtx.updateSchemesCount(listItems.length);
  });

  const navigation = useNavigation();

  function onPressHandler() {
    console.log("Pressed!");
    navigation.navigate("SchemeDetails");
  }

  let list;

  if (query) {
    list = listItems.filter((item) => item.title.includes(query));
  } else {
    list = listItems;
  }

  return (
    <>
      <ScrollView>
        {list.map((item, index) => (
          <View key={index}>
            <Card style={styles.card}>
              <Pressable onPress={onPressHandler}>
                <View style={styles.header}>
                  <Image
                    style={styles.image}
                    source={require("../../assets/images/emblem.png")}
                  />
                  <View>
                    <Title style={styles.title}>{item.title}</Title>
                    <Text style={styles.subtitle}>{item.department}</Text>
                  </View>
                </View>
                <View style={styles.tags}>
                  <Text style={styles.highlight}>{item.beneficiary}</Text>
                  <Text>{item.benefitsType}</Text>
                </View>
              </Pressable>
            </Card>
          </View>
        ))}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    height: 50,
    width: 40,
    marginRight: 7,
  },
  title: {
    fontSize: 15,
  },
  subtitle: {
    fontFamily: "work-sans-regular",
    color: colors.gray700,
  },
  tags: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 10,
  },
  card: {
    marginHorizontal: 20,
    paddingRight: 40,
  },
  highlight: {
    backgroundColor: colors.primary400,
    color: "white",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 20,
  },
});
