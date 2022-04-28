import { useEffect, useState } from "react";
import { View, StyleSheet, Pressable, Modal, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import colors from "../../config/colors";
import Text from "../UI/Text";
import Title from "../UI/Title";
import { departments, beneficiary } from "../../data/filters";
import Filters from "./Filters";

export default function SchemesFilter() {
  const [isDepartments, setIsDepartments] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [filterData, setFilterData] = useState(filterList);

  let filterList = isDepartments ? departments : beneficiary;

  function filterHandler() {
    setIsDepartments(!isDepartments);
  }

  function onItemSelectHandler(itemId) {
    // console.log(itemId);
    // const data = filterData;
    // const index = data.findIndex((item) => item.id === itemId);

    // data[index].checked = !data[index].checked;

    // setFilterData(data);
    // console.log(data);
    setModalVisible(false);
  }

  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => setModalVisible(true)}
        android_ripple={{ color: colors.gray800 }}
      >
        <Ionicons name="filter" size={20} color={colors.gray800} />
      </Pressable>

      <Modal visible={modalVisible} animationType="slide">
        <ScrollView style={styles.modal}>
          <Pressable onPress={() => setModalVisible(false)}>
            <Ionicons
              style={styles.chevronIcon}
              name="chevron-down"
              size={30}
            />

            <Filters filter={filterHandler} />

            <View style={styles.modalList}>
              {filterList.map((filterItem) => (
                <View key={filterItem.id}>
                  <Pressable
                    onPress={onItemSelectHandler.bind(this, filterItem.id)}
                    android_ripple={{ color: colors.gray800 }}
                  >
                    <View style={styles.modalItem}>
                      {/* {filterItem.checked ? (
                      <MaterialCommunityIcons
                        name="checkbox-marked"
                        size={24}
                        color="black"
                      />
                    ) : (
                      <MaterialCommunityIcons
                        name="checkbox-blank-outline"
                        size={24}
                        color="black"
                      />
                    )} */}
                      <Title style={styles.itemText}>{filterItem.item}</Title>
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
  modal: {
    paddingTop: 10,
  },
  chevronIcon: {
    alignSelf: "center",
    marginBottom: 20,
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
