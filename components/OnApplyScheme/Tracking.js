import { useNavigation } from "@react-navigation/native";
import { View, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import Text from "../UI/Text";
import colors from "../../config/colors";
import Button from "../UI/Button";

export default function Tracking() {
  const navigation = useNavigation();

  function homeBtnHandler() {
    navigation.navigate("Home");
  }

  function appliedBtnHandler() {
    navigation.navigate("AppliedSchemes");
  }

  return (
    <View style={styles.container}>
      <Text>Application Status</Text>

      <View style={styles.stage}>
        <FontAwesome name="dot-circle-o" size={20} color={colors.gray800} />
        <Text style={styles.stageText}>Application submitted</Text>
      </View>

      <View style={styles.stage}>
        <FontAwesome name="dot-circle-o" size={20} color={colors.gray800} />
        <Text style={styles.stageText}>Pending Approval</Text>
      </View>

      <View style={styles.stage}>
        <FontAwesome name="circle-o" size={20} color={colors.gray800} />
        <Text style={styles.stageText}>Application approved</Text>
      </View>

      <View style={styles.buttons}>
        <Button style={styles.button} onPress={homeBtnHandler}>
          Home
        </Button>
        <Button style={styles.button} onPress={appliedBtnHandler}>
          Applied
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  stage: {
    flexDirection: "row",
    marginTop: 20,
    marginBottom: 30,
  },
  stageText: {
    marginLeft: 20,
    fontWeight: "bold",
  },
  buttons: {
    marginTop: 50,
    flexDirection: "row",
    overflow: "hidden",
  },
  button: {
    flex: 1,
    backgroundColor: colors.gray800,
    margin: 10,
    marginTop: 70,
    overflow: "hidden",
  },
});
