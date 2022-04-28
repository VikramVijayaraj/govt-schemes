import { Pressable, StyleSheet, View } from "react-native";

import colors from "../../config/colors";
import Text from "./Text";

function Button({ children, onPress, style }) {
  return (
    <Pressable
      style={({ pressed }) => [styles.button, pressed && styles.pressed, style]}
      onPress={onPress}
      android_ripple={{ color: colors.primary800 }}
    >
      <View>
        <Text style={styles.buttonText}>{children}</Text>
      </View>
    </Pressable>
  );
}

export default Button;

const styles = StyleSheet.create({
  button: {
    borderRadius: 6,
    paddingVertical: 12,
    paddingHorizontal: 12,
    backgroundColor: colors.primary500,
    elevation: 4,
  },
  pressed: {
    opacity: 0.7,
  },
  buttonText: {
    textAlign: "center",
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});

// import { StyleSheet, Pressable, View } from "react-native";

// import colors from "../../config/colors";
// import Text from "./Text";

// export default function Button({
//   children,
//   containerStyle,
//   textStyle,
//   onPress,
// }) {
//   return (
//     <View style={[styles.button, containerStyle]}>
//       <Pressable
//         onPress={onPress}
//         android_ripple={{ color: colors.primary800 }}
//       >
//         <Text style={[styles.text, textStyle]}>{children}</Text>
//       </Pressable>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   button: {
//     alignSelf: "center",
//     borderRadius: 20,
//     backgroundColor: colors.primary500,
//     overflow: "hidden",
//   },
//   text: {
//     fontSize: 15,
//     paddingHorizontal: 30,
//     paddingVertical: 10,
//     color: "white",
//     textAlign: "center",
//     fontFamily: "work-sans-regular",
//     color: colors.gray100,
//   },
// });
