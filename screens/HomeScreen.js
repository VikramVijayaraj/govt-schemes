import { View, StyleSheet } from "react-native";

import Text from "../components/UI/Text";
import Header from "../components/Home/Header";
import SeachBar from "../components/Home/SeachBar";
import SchemesCountContextProvider from "../store/schemes-count-context";

export default function HomeScreen() {
  return (
    <SchemesCountContextProvider>
      <View style={styles.container}>
        <Header />
        <SeachBar />
      </View>
    </SchemesCountContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 40,
  },
});
