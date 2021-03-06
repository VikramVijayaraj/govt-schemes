import { StyleSheet, Image } from "react-native";
import React from "react";

export default function AppLogin() {
  return (
    <Image resizeMode="contain" style={styles.image} source={require("../../assets/login.png")} />
  );
}

const styles = StyleSheet.create({
  image: {
    marginTop: 50,
    marginBottom: 30,
    width: "100%",
    height: 200,
  },
});
