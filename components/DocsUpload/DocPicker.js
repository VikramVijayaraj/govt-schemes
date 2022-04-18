import { View, StyleSheet } from "react-native";
import { useState } from "react";
import * as DocumentPicker from "expo-document-picker";
import * as OpenAnything from "react-native-openanything";

import Text from "../UI/Text";

export default function DocPicker() {
  const [file, setFile] = useState();

  function showDoc(result) {
    console.log(result);
    return OpenAnything.Pdf(result.uri);
  }

  const pickDocument = async () => {
    const result = await DocumentPicker.getDocumentAsync({});
    showDoc(result);
    setFile(result.uri);
  };

  return (
    <View style={styles.container}>
      <Text>Docs Upload Screen</Text>
      <Text>{file}</Text>
      <Button title="Upload" onPress={pickDocument} />

      <Button title="Pdf File" onPress={() => OpenAnything.Pdf(result.uri)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
