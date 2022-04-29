import { useContext, useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Image,
  Pressable,
  ActivityIndicator,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import colors from "../../config/colors";
import Card from "../UI/Card";
import Title from "../UI/Title";
import Text from "../UI/Text";
import { SchemesCountContext } from "../../store/schemes-count-context";

// import { LogBox } from "react-native";
// LogBox.ignoreAllLogs(); //Ignore all log notifications

export default function List({ listItems, query }) {
  const navigation = useNavigation();

  const countCtx = useContext(SchemesCountContext);

  const stateArr = [];

  listItems.map((item) => {
    for (let key in item) {
      stateArr.push(item[key]);
    }
  });

  countCtx.updateSchemesCount(stateArr.length);

  function onPressHandler(details) {
    navigation.navigate("SchemeDetails", {
      details: details,
    });
  }

  if (!stateArr[0]) {
    countCtx.updateSchemesCount(0);

    return (
      <View style={styles.nothing}>
        <Text>No schemes found!</Text>
      </View>
    );
  }

  let list;

  if (query) {
    list = stateArr.filter((item) => item.name.includes(query));
  } else {
    list = stateArr;
  }

  return (
    <>
      <ScrollView>
        {list.map((item, index) => (
          <View key={index}>
            <Card style={styles.card}>
              <Pressable onPress={onPressHandler.bind(this, item)}>
                <View style={styles.header}>
                  <Image
                    style={styles.image}
                    source={require("../../assets/images/emblem.png")}
                  />
                  <View>
                    <Title style={styles.title}>{item.name}</Title>
                    <Text style={styles.subtitle}>{item.department}</Text>
                  </View>
                </View>
                <View style={styles.tags}>
                  <Text style={styles.highlight}>{item.beneficiary}</Text>
                  <Text>{item.benefits}</Text>
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
  nothing: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
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
    paddingRight: 60,
  },
  highlight: {
    backgroundColor: colors.primary400,
    color: "white",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 20,
  },
});
