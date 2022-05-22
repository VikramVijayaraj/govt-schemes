import { useContext, useEffect, useState } from "react";
import { View, StyleSheet, Pressable, Modal, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import colors from "../../config/colors";
import Text from "../UI/Text";
import Title from "../UI/Title";
import { getBeneficiaries } from "../../helper/schemesInfo";
import { FilterContext } from "../../store/filter-context";
import { UserContext } from "../../store/user-context";
import Beneficiary from "./Beneficiary";

export default function SchemesFilter() {
  const filterCtx = useContext(FilterContext);
  const { userData, setUserData } = useContext(UserContext);

  const [modalVisible, setModalVisible] = useState(false);
  const [filterList, setFilterList] = useState([]);

  useEffect(() => {
    async function showFilterList() {
      const beneficiaryList = await getBeneficiaries();
      setFilterList(["All", ...beneficiaryList]);
    }

    showFilterList();
  }, []);

  function onItemSelectHandler(item) {
    userData.beneficiaryType = item;
    setUserData({ ...userData });
    filterCtx.updateBeneficiary(item);
    setModalVisible(false);
  }

  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => setModalVisible(true)}
        android_ripple={{ color: colors.gray800 }}
      >
        <View style={styles.filterContainer}>
          <Beneficiary />
          <Ionicons name="filter" size={20} color={colors.gray800} />
        </View>
      </Pressable>

      <Modal visible={modalVisible} animationType="slide">
        <ScrollView style={styles.modal}>
          <Pressable onPress={() => setModalVisible(false)}>
            <Ionicons
              style={styles.chevronIcon}
              name="chevron-down"
              size={30}
            />

            <View style={styles.modalList}>
              {filterList.map((filterItem, idx) => (
                <View key={idx}>
                  <Pressable
                    onPress={onItemSelectHandler.bind(this, filterItem)}
                    android_ripple={{ color: colors.gray800 }}
                  >
                    <View style={styles.modalItem}>
                      <Title style={styles.itemText}>{filterItem}</Title>
                    </View>
                  </Pressable>
                </View>
              ))}
            </View>
          </Pressable>
        </ScrollView>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    marginRight: 5,
  },
  filterContainer: {
    flexDirection: "row",
  },
  modal: {
    paddingTop: 20,
  },
  chevronIcon: {
    alignSelf: "center",
  },
  modalList: {
    margin: 20,
  },
  modalItem: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: colors.gray300,
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  itemText: {
    fontSize: 20,
  },
});
