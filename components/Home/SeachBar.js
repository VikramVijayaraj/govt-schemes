import { View, StyleSheet, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import TestData from "../../data/test";
import colors from "../../config/colors";
import { useState } from "react";
import List from "./List";
import SchemesCount from "./SchemesCount";
import SchemesFilter from "./SchemesFilter";

export default function SeachBar() {
  const [searchQuery, setSearchQuery] = useState("");

  function inputHandler(enteredText) {
    setSearchQuery(enteredText);
  }

  return (
    <>
      <View style={styles.container}>
        <View style={styles.left}>
          <Ionicons style={styles.icon} name="search-outline" size={20} />
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Search schemes!"
              onChangeText={inputHandler}
            />
          </View>
        </View>

        <View style={styles.closeIconContainer}>
          {searchQuery && <Ionicons name="close" color={colors.gray800} />}
        </View>
      </View>

      <View style={styles.info}>
        <SchemesCount />
        <SchemesFilter />
      </View>

      {searchQuery ? (
        <List
          listItems={TestData}
          query={searchQuery}
        />
      ) : (
        <List listItems={TestData} />
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: colors.gray100,
    height: 40,
    borderRadius: 10,
    padding: 10,
    marginHorizontal: 20,
  },
  left: {
    flexDirection: "row",
  },
  info: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
    marginHorizontal: 20,
  },
  icon: {
    marginRight: 8,
    color: colors.gray800,
  },
  inputContainer: {
    // flex: 1,
    // width: "80%",
  },
  input: {
    // flex: 1,
    color: colors.gray700,
    // width: "100%",
    // backgroundColor: "gold",
  },
  closeIconContainer: {},
});
