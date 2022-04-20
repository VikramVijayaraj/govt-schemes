import { View, StyleSheet } from "react-native";

import DocsHeader from "../components/DocsUpload/DocsHeader";
import UploadFooter from "../components/DocsUpload/UploadFooter";

export default function DocsUploadScreen() {
  return (
    <View style={styles.container}>
      <DocsHeader />
      <UploadFooter />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 40,
  },
});
