import { View, StyleSheet } from "react-native";
import { WebView } from "react-native-webview";

import Text from "../components/UI/Text";

export default function FilePreviewScreen({ route }) {
  const { url } = route.params.fileData;
  console.log(url);
  return (
    <View style={styles.container}>
      <WebView style={styles.container} source={{ uri: url }} />
      <Text>Hello</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
