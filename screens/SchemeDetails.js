import { StyleSheet, ScrollView, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";

import DetailHeader from "../components/SchemeDetails/DetailHeader";
import DetailList from "../components/SchemeDetails/DetailList";
import Button from "../components/SchemeDetails/Button";

export default function SchemeDetails() {
  const navigation = useNavigation();

  function btnPressHandler() {
    Alert.alert(
      "Do you want to apply for this scheme?",
      "Tap 'Yes' to proceed!",
      [
        {
          text: "No",
        },
        { text: "Yes", onPress: onApplyHandler },
      ]
    );
  }

  function onApplyHandler() {
    navigation.navigate("OnApply");
  }

  return (
    <>
      <ScrollView style={styles.container}>
        <DetailHeader />
        <DetailList />
      </ScrollView>
      <Button onPress={btnPressHandler} containerStyle={styles.floatButton}>
        Apply
      </Button>
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
