import { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import * as DocumentPicker from "expo-document-picker";

import Button from "../UI/Button";
import DocsList from "./DocsList";

export default function UploadFooter() {
  const [fileName, setFileName] = useState();

  const pickDocument = async () => {
    const result = await DocumentPicker.getDocumentAsync({});
    // console.log(result);
    setFileName(result.name);
    // console.log(fileName);
  };

  return (
    <>
      {fileName && <DocsList name={fileName} />}

      <View style={styles.container}>
        <Button containerStyle={styles.uploadBtn} onPress={pickDocument}>
          {/* <Text textStyle={styles.uploadText}>Upload</Text> */}
          <Feather name="upload" size={30} color="white" />
        </Button>
      </View>
    </>
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
  uploadText: {
    marginHorizontal: 20,
  },
});
