import { useNavigation } from "@react-navigation/native";
import { useContext, useEffect, useState } from "react";
import { View, StyleSheet, Pressable } from "react-native";

import colors from "../../config/colors";
import { UploadContext } from "../../store/upload-context";
import { UserContext } from "../../store/user-context";
import { fetchUser } from "../../util/user";
import Card from "../UI/Card";
import Text from "../UI/Text";

export default function DocsList() {
  const navigation = useNavigation();
  console.log("Rendered!");

  const uploadCtx = useContext(UploadContext);
  console.log(uploadCtx.files);
  const { userData } = useContext(UserContext);

  const [filesList, setFilesList] = useState([]);

  const tempArr = [];

  useEffect(() => {
    setFilesList([]); // for DEVELOPMENT ONLY

    async function getUserDocs() {
      const response = await fetchUser(userData.uid);
      if (response.documents) {
        for (let key in response.documents) {
          const helperArr = [];
          helperArr.push(response.documents[key].name);
          setFilesList((currentFiles) => [...currentFiles, ...helperArr]);
          console.log(filesList);
        }
      }
    }
    getUserDocs();
  }, []);

  tempArr.push(...filesList, ...uploadCtx.files);
  console.log(tempArr);

  if (tempArr.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.nothing}>No files uploaded!</Text>
      </View>
    );
  }

  function previewFile(file) {
    navigation.navigate("FilePreview", {
      fileData: file,
    });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.caption}>Uploaded files</Text>
      <View>
        {tempArr.map((file, index) => (
          <View key={index}>
            <Pressable onPress={previewFile.bind(this, file)}>
              <Card>
                <Text>{file}</Text>
              </Card>
            </Pressable>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 7,
    marginTop: 20,
    // backgroundColor: "gold",
  },
  caption: {
    color: colors.gray700,
  },
  nothing: {
    fontFamily: "work-sans-light",
    alignSelf: "center",
  },
});
