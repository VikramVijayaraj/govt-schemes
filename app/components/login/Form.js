import {
  TextInput,
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Switch,
} from "react-native";
import React, { useState } from "react";

import colors from "../../config/colors";
import Signup from "../signup";

export default function Form(props) {
  console.log(props);
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={setUserEmail}
        placeholder="Email"
        value={userEmail}
      />
      <TextInput
        style={styles.input}
        onChangeText={setUserPassword}
        placeholder="Password"
        value={userPassword}
      />

      <View style={styles.action}>
        <View style={styles.switch}>
          <Switch
            trackColor={{ false: "#767577", true: "green" }}
            thumbColor="#f4f3f4"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
          <Text>Remember Me</Text>
        </View>
        <Text>Forgot Password?</Text>
      </View>

      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => (
          <>
            {props.onPress(false)}
            {console.log("Pressed!")}
          </>
        )}
      >
        <Text style={styles.loginButtonText}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 30,
    margin: 0,
  },
  input: {
    height: 40,
    padding: 10,
    borderWidth: 0.1,
    width: "100%",
    marginBottom: 20,
    // elevation: 1,
    borderRadius: 2,
  },
  loginButton: {
    backgroundColor: colors.primary,
    height: 50,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  loginButtonText: {
    color: colors.light,
    fontWeight: "bold",
    fontSize: 16,
    letterSpacing: 3,
  },
  switch: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  action: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 5,
  },
});
