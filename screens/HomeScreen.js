import { View, StyleSheet } from "react-native";

import List from "../components/Home/List";
import TestData from "../data/test";
import Text from "../components/UI/Text";
import Header from "../components/Home/Header";
import SeachBar from "../components/Home/SeachBar";
import SchemesCount from "../components/Home/SchemesCount";
import SchemesFilter from "../components/Home/SchemesFilter";
import SchemesCountContextProvider from "../context/schemes-count-context";

export default function HomeScreen() {
  return (
    <SchemesCountContextProvider>
      <View style={styles.container}>
        <Header />
        <SeachBar />

        <View style={styles.info}>
          <SchemesCount />
          <SchemesFilter />
        </View>

        <List listItems={TestData} />
      </View>
    </SchemesCountContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  info: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
    marginHorizontal: 20,
  },
});