import { View, StyleSheet } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import icons from "./Icons";

export default function LoginProviders() {
  return (
    <View style={styles.container}>
      {icons.map((icon, index) => (
        <MaterialCommunityIcons
          key={index}
          name={icon.name}
          size={30}
          color={icon.color}
          style={styles.icon}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    margin: 40,
    
  },
  icon: {
    paddingHorizontal: 20,
  }
});
