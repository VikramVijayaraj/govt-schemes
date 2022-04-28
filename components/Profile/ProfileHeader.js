import { useContext } from "react";
import { View, StyleSheet, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import Title from "../UI/Title";
import Text from "../UI/Text";
import colors from "../../config/colors";
import Button from "./Button";
import { AuthContext } from "../../store/auth-context";
import { UserContext } from "../../store/user-context";

export default function ProfileHeader() {
  const navigation = useNavigation();

  const authCtx = useContext(AuthContext);

  const { userData } = useContext(UserContext);

  function editHandler() {
    navigation.navigate("UpdateProfile");
  }

  function logoutHandler() {
    authCtx.logout();
  }

  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <View style={styles.leftSection}>
          <View>
            <Image
              style={styles.image}
              source={require("../../assets/images/user-avatar.png")}
            />
            <Ionicons name="camera" size={30} style={styles.cameraIcon} />
          </View>

          <View style={styles.text}>
            {/* <TextInput style={styles.username} placeholder={userName} /> */}
            <Title style={styles.username}>
              {userData.firstName} {userData.lastName}
            </Title>
          </View>
        </View>
      </View>

      <View style={styles.subSection}>
        <View>
          <Button containerStyle={styles.subSectionBtn} onPress={editHandler}>
            <Ionicons name="pencil" size={20} />
          </Button>
          <Text style={styles.btnTag}>Edit</Text>
        </View>
        <View>
          <Button
            containerStyle={[
              styles.subSectionBtn,
              { backgroundColor: colors.logout },
            ]}
            onPress={logoutHandler}
          >
            <Ionicons name="log-out" size={22} />
          </Button>
          <Text style={styles.btnTag}>Logout</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    backgroundColor: colors.gray100,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  topSection: {
    flexDirection: "row",
    alignItems: "center",
  },
  subSection: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginVertical: 20,
  },
  subSectionBtn: {
    backgroundColor: colors.primary400,
  },
  btnTag: {
    alignSelf: "center",
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
  },
  username: {
    flex: 1,
    fontFamily: "work-sans-bold",
    fontSize: 25,
    color: colors.gray800,
    textAlignVertical: "center",
  },
});
