import { StyleSheet, ScrollView } from "react-native";

import Button from "../components/UI/Button";
import DetailHeader from "../components/SchemeDetails/DetailHeader";
import DetailList from "../components/SchemeDetails/DetailList";

export default function SchemeDetails() {
  return (
    <>
      <ScrollView style={styles.container}>
        <DetailHeader />
        <DetailList />
      </ScrollView>
      <Button containerStyle={styles.floatButton}>Apply</Button>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  floatButton: {
    position: "absolute",
    bottom: 10,
    width: "50%",
  },
});
