import { useContext, useEffect, useState } from "react";
import { View, StyleSheet, Image, Pressable, ToastAndroid } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import * as DocumentPicker from "expo-document-picker";

import Title from "../UI/Title";
import Text from "../UI/Text";
import colors from "../../config/colors";
import Button from "./Button";
import { AuthContext } from "../../store/auth-context";
import { UserContext } from "../../store/user-context";
import { firebaseApp } from "../../config/firebase";
import "firebase/storage";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { addUserAvatar, fetchUserAvatar } from "../../util/user";

export default function ProfileHeader() {
  const navigation = useNavigation();

  const authCtx = useContext(AuthContext);
  const { userData, setUserData } = useContext(UserContext);

  const [userAvatar, setUserAvatar] = useState("");

  function editHandler() {
    navigation.navigate("UpdateProfile");
  }

  function logoutHandler() {
    authCtx.logout();
  }

  async function updateUserAvatar(type, name, url) {
    const imageData = {
      name,
      type,
      url,
    };
    await addUserAvatar(userData.uid, imageData);
  }

  async function uploadImageAsync(uri, name) {
    const blob = await new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = function () {
        resolve(xhr.response);
      };
      xhr.onerror = function (e) {
        console.log(e);
        reject(new TypeError("Network request failed"));
      };
      xhr.responseType = "blob";
      xhr.open("GET", uri, true);
      xhr.send(null);
    });

    const imageRef = ref(getStorage(), `avatars/${userData.uid}/${name}`);
    const result = await uploadBytes(imageRef, blob);

    blob.close();

    const uploadURL = await getDownloadURL(imageRef).then((url) => url);

    return uploadURL;
  }

  const pickImage = async () => {
    const result = await DocumentPicker.getDocumentAsync({});
    const uploadURL = await uploadImageAsync(result.uri, result.name);

    await updateUserAvatar(result.mimeType, result.name, uploadURL);

    userData.avatarURL = uploadURL;
    setUserData({ ...userData });
    setUserAvatar(uploadURL);

    ToastAndroid.show("Profile picture updated !", ToastAndroid.SHORT);
  };

  const defaultImage = require("../../assets/images/user-avatar.png");

  useEffect(() => {
    async function getUserAvatar() {
      const avatar = await fetchUserAvatar(userData.uid);
      setUserAvatar(avatar.url);
    }

    getUserAvatar();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <View style={styles.leftSection}>
          <Pressable onPress={pickImage} style={styles.imageContainer}>
            {userAvatar ? (
              <Image style={styles.image} source={{ uri: userAvatar }} />
            ) : (
              <Image style={styles.image} source={defaultImage} />
            )}
            <Ionicons name="camera" size={30} style={styles.cameraIcon} />
          </Pressable>

          <View style={styles.text}>
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
  imageContainer: {},
  image: {
    height: 70,
    width: 70,
    marginRight: 20,
    borderRadius: 50,
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
