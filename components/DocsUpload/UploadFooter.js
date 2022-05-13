import { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import * as DocumentPicker from "expo-document-picker";
import { firebaseApp } from "../../config/firebase";
import "firebase/storage";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

import Button from "../UI/Button";
import { UploadContext } from "../../store/upload-context";
import { UserContext } from "../../store/user-context";
import { updateUser } from "../../util/user";

export default function UploadFooter() {
  const { userData } = useContext(UserContext);

  const uploadCtx = useContext(UploadContext);

  async function updateUserData(type, name, url) {
    const folder = name.replace(/ /g, "").slice(0, -4); // removes inbetween spaces and file extension

    const fileData = {
      type,
      name,
      url,
    };

    await updateUser(userData.uid, folder, fileData);
  }

  async function uploadDocumentAsync(uri, name) {
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

    const fileRef = ref(getStorage(), `documents/${userData.uid}/${name}`);
    const result = await uploadBytes(fileRef, blob);
    
    blob.close();

    const uploadURL = await getDownloadURL(fileRef).then((url) => url);

    return uploadURL;
  }

  const pickDocument = async () => {
    const result = await DocumentPicker.getDocumentAsync({});

    uploadCtx.uploadFile(result.name);

    const uploadURL = await uploadDocumentAsync(result.uri, result.name);

    await updateUserData(result.mimeType, result.name, uploadURL);
  };

  return (
    <View style={styles.container}>
      <Button containerStyle={styles.uploadBtn} onPress={pickDocument}>
        <Feather name="upload" size={30} color="white" />
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingBottom: 10,
    // position: "absolute",
    // backgroundColor: "red",
  },
  uploadBtn: {
    width: "100%",
    borderRadius: 8,
  },
});
