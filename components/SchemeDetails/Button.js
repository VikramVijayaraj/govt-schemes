import { StyleSheet, Pressable, View } from "react-native";

import colors from "../../config/colors";
import Text from "../UI/Text";

export default function Button({
  children,
  containerStyle,
  textStyle,
  onPress,
}) {
  return (
    <View style={[styles.button, containerStyle]}>
      <Pressable
        onPress={onPress}
        android_ripple={{ color: colors.primary800 }}
      >
        <Text style={[styles.text, textStyle]}>{children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    alignSelf: "center",
    borderRadius: 20,
    backgroundColor: colors.primary500,
    overflow: "hidden",
  },
  text: {
    fontSize: 15,
    paddingHorizontal: 30,
    paddingVertical: 10,
    color: "white",
    textAlign: "center",
    fontFamily: "work-sans-regular",
    color: colors.gray100,
  },
});
