import { View, StyleSheet, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

import StateModal from "./StateModal";
import colors from "../../config/colors";

export default function Header() {
  const navigation = useNavigation();

  function avatarPressHandler() {
    navigation.navigate("Profile");
  }

  return (
    <View style={styles.headerContainer}>
      <View style={styles.headerState}>
        <StateModal />
      </View>
      <Pressable
        onPress={avatarPressHandler}
        android_ripple={{ color: colors.gray800 }}
      >
        <Image
          style={styles.headerImage}
          source={require("../../assets/user-avatar.png")}
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
    marginHorizontal: 20,
  },
  headerImage: {
    width: 50,
    height: 50,
  },
});
