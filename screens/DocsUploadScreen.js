import { View, StyleSheet, ScrollView } from "react-native";

import DocsHeader from "../components/DocsUpload/DocsHeader";
import DocsList from "../components/DocsUpload/DocsList";
import UploadFooter from "../components/DocsUpload/UploadFooter";
import UploadContextProvider from "../store/upload-context";

export default function DocsUploadScreen() {
  return (
    <UploadContextProvider>
      <View style={styles.container}>
        <DocsHeader />

        <DocsList />
      
        <UploadFooter />
      </View>
    </UploadContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 40,
  },
});
