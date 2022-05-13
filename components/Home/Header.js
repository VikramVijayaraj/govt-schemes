import { useContext, useEffect, useState } from "react";
import { View, StyleSheet, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

import StateModal from "./StateModal";
import colors from "../../config/colors";
import { fetchUserAvatar } from "../../util/user";
import { UserContext } from "../../store/user-context";

export default function Header() {
  const navigation = useNavigation();

  const { userData } = useContext(UserContext);
  const [userAvatar, setUserAvatar] = useState("");

  function avatarPressHandler() {
    navigation.navigate("Profile");
  }

  const defaultImage = require("../../assets/images/user-avatar.png");

  useEffect(() => {
    async function getUserAvatar() {
      const avatar = await fetchUserAvatar(userData.uid);
      setUserAvatar(avatar.url);
    }

    getUserAvatar();
  }, [userData]);

  return (
    <View style={styles.headerContainer}>
      <View style={styles.headerState}>
        <StateModal />
      </View>
      <Pressable
        style={styles.imageContainer}
        onPress={avatarPressHandler}
        android_ripple={{ color: colors.gray800 }}
      >
        {userAvatar ? (
          <Image style={styles.headerImage} source={{ uri: userAvatar }} />
        ) : (
          <Image style={styles.headerImage} source={defaultImage} />
        )}
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
    borderRadius: 50,
  },
});
