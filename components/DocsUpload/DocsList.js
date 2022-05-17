import { useNavigation } from "@react-navigation/native";
import { useContext, useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Pressable,
  ActivityIndicator,
  Image,
} from "react-native";

import colors from "../../config/colors";
import { UploadContext } from "../../store/upload-context";
import { UserContext } from "../../store/user-context";
import { fetchUser } from "../../util/user";
import Card from "../UI/Card";
import Text from "../UI/Text";

export default function DocsList() {
  const navigation = useNavigation();

  const uploadCtx = useContext(UploadContext);

  const { userData } = useContext(UserContext);

  const [filesList, setFilesList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const tempArr = [];

  useEffect(() => {
    setFilesList([]); // for DEVELOPMENT ONLY
    setIsLoading(true);
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
    setIsLoading(false);
  }, []);

  tempArr.push(...filesList, ...uploadCtx.files);

  if (isLoading) return <ActivityIndicator size="large" color="dodgerblue" />;

  if (tempArr.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.nothing}>No files uploaded!</Text>
      </View>
    );
  }

  function previewFile(file) {
    // navigation.navigate("FilePreview", {
    //   fileData: file,
    // });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.caption}>Uploaded files</Text>
      <View>
        {tempArr.map((file, index) => (
          <View key={index}>
            <Pressable onPress={previewFile.bind(this, file)}>
              <Card style={styles.card}>
                <View style={styles.fileItem}>
                  <Image
                    style={styles.fileImage}
                    source={require("../../assets/images/file.png")}
                  />
                  <Text>{file}</Text>
                </View>
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
    marginBottom: 10
  },
  nothing: {
    fontFamily: "work-sans-light",
    alignSelf: "center",
  },
  card: {
    marginVertical: 5,
    borderRadius: 5
  },
  fileItem: {
    flexDirection: "row",
    alignItems: "center",
  },
  fileImage: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
});
