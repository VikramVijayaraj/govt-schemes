import { useNavigation } from "@react-navigation/native";
import { useContext, useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Pressable,
  Image,
  ActivityIndicator,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as DocumentPicker from "expo-document-picker";

import UserForm from "../components/Profile/UserForm";
import Text from "../components/UI/Text";
import Title from "../components/UI/Title";
import colors from "../config/colors";
import { UserContext } from "../store/user-context";
import { addUserAvatar, fetchUserAvatar } from "../util/user";
import { firebaseApp } from "../config/firebase";
import "firebase/storage";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

export default function CreateProfileScreen() {
  const navigation = useNavigation();

  const { userData, setUserData } = useContext(UserContext);

  const [userAvatar, setUserAvatar] = useState("");
  const [isLoading, setIsLoading] = useState(false);

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

    setIsLoading(true);
    const uploadURL = await uploadImageAsync(result.uri, result.name);
    await updateUserAvatar(result.mimeType, result.name, uploadURL);

    userData.avatarURL = uploadURL;
    setUserData({ ...userData });
    setUserAvatar(uploadURL);

    setIsLoading(false);
    ToastAndroid.show("Profile picture updated !", ToastAndroid.SHORT);
  };

  const defaultImage = require("../assets/images/user-avatar.png");

  useEffect(() => {
    async function getUserAvatar() {
      const avatar = await fetchUserAvatar(userData.uid);
      setUserAvatar(avatar.url);
    }

    getUserAvatar();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Title style={styles.title}>Add Profile</Title>

      <View>
        <Pressable onPress={pickImage} style={styles.imageContainer}>
          {userAvatar ? (
            <View>
              {isLoading ? (
                <ActivityIndicator
                  style={styles.image}
                  size="large"
                  color="dodgerblue"
                />
              ) : (
                <Image style={styles.image} source={{ uri: userAvatar }} />
              )}
            </View>
          ) : (
            <Image style={styles.image} source={defaultImage} />
          )}
          {!isLoading && (
            <Ionicons name="camera" size={30} style={styles.cameraIcon} />
          )}
        </Pressable>
      </View>

      <UserForm create />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
  },
  title: {
    paddingHorizontal: 20,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: colors.gray400,
  },
  imageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  image: {
    height: 120,
    width: 120,
    marginRight: 20,
    borderRadius: 100,
  },
  cameraIcon: {
    color: "#95D1CC",
    position: "absolute",
    top: 80,
    left: "55%",
  },
});
