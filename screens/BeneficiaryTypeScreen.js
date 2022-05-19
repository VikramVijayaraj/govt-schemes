import { useNavigation } from "@react-navigation/native";
import { useContext, useEffect, useState } from "react";
import { View, StyleSheet, Pressable, ScrollView } from "react-native";
import Button from "../components/UI/Button";

import Text from "../components/UI/Text";
import Title from "../components/UI/Title";
import colors from "../config/colors";
import { getBeneficiaries } from "../helper/schemesInfo";
import { UserContext } from "../store/user-context";

export default function BeneficiaryTypeScreen() {
  const navigation = useNavigation();

  const { userData, setUserData } = useContext(UserContext);

  const [beneficiaryList, setBeneficiaryList] = useState([]);
  const [eligible, setEligible] = useState("");

  useEffect(() => {
    async function getBeneficiaryList() {
      const list = await getBeneficiaries();
      setBeneficiaryList(list);
    }

    getBeneficiaryList();
  }, []);

  function onPressHandler(item) {
    setEligible(item);
  }

  function btnHandler() {
    console.log(eligible);
    userData.beneficiaryType = eligible;
    setUserData({ ...userData });
    navigation.navigate("AppBottomTabs");
  }
  console.log(userData);
  return (
    <View style={styles.container}>
      <Title>Select Beneficiary</Title>

      <ScrollView style={styles.list}>
        {beneficiaryList.map((item, idx) => (
          <Pressable
            style={
              item === eligible ? styles.selectedItem : styles.itemContainer
            }
            onPress={onPressHandler.bind(this, item)}
            android_ripple={{ color: colors.gray800 }}
            key={idx}
          >
            <View>
              <Text
                style={
                  item === eligible ? styles.selectedItem : styles.itemText
                }
              >
                {item}
              </Text>
            </View>
          </Pressable>
        ))}
      </ScrollView>

      <Button onPress={btnHandler} style={styles.button}>
        Done
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 60,
    paddingHorizontal: 20,
  },
  list: {
    marginTop: 10,
  },
  itemContainer: {
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderBottomWidth: 2,
    borderBottomColor: colors.gray300,
  },
  itemText: {
    fontSize: 20,
  },
  selectedItem: {
    fontSize: 20,
    paddingVertical: 10,
    paddingHorizontal: 5,
    backgroundColor: colors.gray800,
    color: "white",
    borderRadius: 10,
    overflow: "hidden",
  },
  button: {
    marginBottom: 15,
  },
});
