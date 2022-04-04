import { View, Text, StyleSheet, Switch } from "react-native";
import { useState } from "react";

import colors from "../../config/colors";
import Form from "./Form";
import LoginImage from "./LoginImage";
import LoginProviders from "./LoginProviders";

export default function index(props) {
  // console.log(props);
  return (
    <>
      <LoginImage />

      <Text style={styles.loginText}>LOGIN</Text>

      <LoginProviders />

      <Text>OR</Text>

      <Form onPress={props.onPress} />

      <Text>
        Don't have an account? <Text style={styles.register}>Register now</Text>
      </Text>
    </>
  );
}

const styles = StyleSheet.create({
  loginText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  register: {
    color: colors.primary,
    fontSize: 14,
    fontWeight: "bold",
  },
});
