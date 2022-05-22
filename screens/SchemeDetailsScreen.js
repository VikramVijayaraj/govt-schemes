import { useContext, useEffect } from "react";
import { StyleSheet, ScrollView, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";

import DetailHeader from "../components/SchemeDetails/DetailHeader";
import DetailList from "../components/SchemeDetails/DetailList";
import Button from "../components/SchemeDetails/Button";
import { AppliedContext } from "../store/applied-context";
import { storeAppliedSchemes } from "../util/applied";
import { UserContext } from "../store/user-context";

export default function SchemeDetails({ route }) {
  console.log(route.params);
  const navigation = useNavigation();

  const appliedCtx = useContext(AppliedContext);
  const { userData } = useContext(UserContext);

  const { sname, dept, date, status, seligible, sbenefit, sdocs, sdetail } =
    route.params.details;

  const applied = route.params.applied;

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
    appliedCtx.applyScheme(route.params.details);

    storeAppliedSchemes(userData.uid, route.params.details);

    navigation.navigate("OnApply", {
      schemeDetails: route.params.details,
    });
  }

  return (
    <>
      <ScrollView style={styles.container}>
        <DetailHeader title={sname} subtitle={dept} status={status} />
        <DetailList
          beneficiary={seligible}
          benefits={sbenefit}
          docs={sdocs}
          description={sdetail}
        />
      </ScrollView>

      {!applied && (
        <Button onPress={btnPressHandler} containerStyle={styles.floatButton}>
          Apply
        </Button>
      )}
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
