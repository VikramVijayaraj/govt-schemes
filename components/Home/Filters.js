import { useState } from "react";
import { View, StyleSheet } from "react-native";
import FlatButton from "../UI/FlatButton";

export default function Filters({ filter }) {
  const [deptSelected, setDeptSelected] = useState(true);
  const [beneficiarySelected, setBeneficiarySelected] = useState(false);

  function departmentsBtnHandler() {
    setDeptSelected(!deptSelected);
    setBeneficiarySelected(false);

    filter();
  }

  function beneficiaryBtnHandler() {
    setBeneficiarySelected(!beneficiarySelected);
    setDeptSelected(false);

    filter();
  }

  return (
    <View style={styles.container}>
      <View style={deptSelected ? styles.selected : styles.btnContainer}>
        <FlatButton onPress={departmentsBtnHandler}>Departments</FlatButton>
      </View>
      <View style={beneficiarySelected ? styles.selected : styles.btnContainer}>
        <FlatButton onPress={beneficiaryBtnHandler}>Beneficiary</FlatButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    // backgroundColor: 'gold',
    justifyContent: "space-evenly",
  },
  btnContainer: {},
  selected: {
    borderBottomWidth: 2,
  },
});
