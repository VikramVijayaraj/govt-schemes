import { View, StyleSheet } from "react-native";

import colors from "../../config/colors";
import Card from "../UI/Card";
import Button from "../UI/Button";
import Text from "../UI/Text";
import { useState } from "react";

export default function FormCard({ label, text1, text2, pressed }) {
  const [isToggle1, setIsToggle1] = useState(false);
  const [isToggle2, setIsToggle2] = useState(false);

  function toogleButtonHandler1() {
    setIsToggle1(!isToggle1);
    setIsToggle2(false);

    pressed(text1);
  }

  function toogleButtonHandler2() {
    setIsToggle2(!isToggle2);
    setIsToggle1(false);

    pressed(text2);
  }

  return (
    <Card>
      <Text style={styles.label}>{label}</Text>

      <View style={styles.buttonContainer}>
        <Button
          containerStyle={isToggle1 ? styles.toggleBtn : styles.button}
          onPress={toogleButtonHandler1}
        >
          <Text style={isToggle1 ? styles.toggleText : styles.text}>
            {text1}
          </Text>
        </Button>
        <Button
          containerStyle={isToggle2 ? styles.toggle : styles.button}
          onPress={toogleButtonHandler2}
        >
          <Text style={isToggle2 ? styles.toggleText : styles.text}>
            {text2}
          </Text>
        </Button>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  label: {
    color: colors.gray800,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingTop: 10,
  },
  button: {
    backgroundColor: colors.gray100,
    borderWidth: 1,
    borderColor: colors.primary400,
  },
  toggleBtn: {
    backgroundColor: colors.primary400,
  },
  toggleText: {
    color: colors.gray100,
  },
});
