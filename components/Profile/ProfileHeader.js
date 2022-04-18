import { View, StyleSheet, Image, Pressable, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import Title from "../UI/Title";
import Text from "../UI/Text";
import { useState } from "react";
import Input from "../UI/Input";
import colors from "../../config/colors";

export default function ProfileHeader() {
  const [userName, setUserName] = useState("User Name");

  return (
    <View style={styles.container}>
      <View style={styles.leftSection}>
        <View>
          <Image
            style={styles.image}
            source={require("../../assets/user-avatar.png")}
          />
          <Ionicons name="camera" size={30} style={styles.cameraIcon} />
        </View>

        <View style={styles.text}>
          <TextInput style={styles.username} placeholder={userName} />
          {/* <Text>Lorem ipsum dolor sit amet</Text> */}
        </View>
      </View>

      <Pressable>
        <Ionicons name="pencil" size={15} color="black" />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    justifyContent: "space-around",
  },
  leftSection: {
    flexDirection: "row",
  },
  image: {
    height: 70,
    width: 70,
    marginRight: 20,
  },
  cameraIcon: {
    color: "#95D1CC",
    position: "absolute",
    top: 40,
    left: 50,
  },
  text: {
    marginRight: 10,
    flex: 1,
    // width: "100%",
    // backgroundColor: "red",
  },
  username: {
    flex: 1,
    fontFamily: "work-sans-bold",
    fontSize: 25,
    color: colors.gray800,
    // width: 230,
  },
});
