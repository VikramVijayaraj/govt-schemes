import { View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import _ from "lodash";

import Input from "../UI/Input";
import { useState } from "react";

export default function UserFormRow(props) {
  const {
    label1,
    placeholder1,
    icon1,
    label2,
    placeholder2,
    icon2,
    userInputs,
  } = props;

  function inputHandler(label, enteredData) {
    label = _.camelCase(label);

    // userData[label] = enteredData;
    // setUserData({ ...userData });

    // console.log(userData);
    userInputs(label, enteredData);
  }

  return (
    <View style={styles.row}>
      <Input
        label={label1}
        placeholder={placeholder1}
        icon={<Ionicons name={icon1} size={20} />}
        onChangeText={inputHandler.bind(this, label1)}
      />
      <Input
        label={label2}
        placeholder={placeholder2}
        icon={<Ionicons name={icon2} size={20} />}
        onChangeText={inputHandler.bind(this, label2)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
});
