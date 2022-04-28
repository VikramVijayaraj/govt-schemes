import { useContext, useEffect, useState } from "react";
import { View, StyleSheet, Modal, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import colors from "../../config/colors";
import Title from "../UI/Title";
import { FilterContext } from "../../store/filter-context";

const stateFilter = [
  {
    name: "Tamil Nadu",
    code: "tn",
  },
  {
    name: "kerala",
    code: "kl",
  },
  {
    name: "Andhra Pradesh",
    code: "ap",
  },
  {
    name: "Karnataka",
    code: "ka",
  },
];

export default function StateModal() {
  const filterCtx = useContext(FilterContext);

  const [modalVisible, setModalVisible] = useState(false);
  const [state, setState] = useState({
    name: "Tamil Nadu",
    code: "tn",
  });

  filterCtx.updateState(state.code);

  function onStateSelectHandler(selected) {
    state.name = selected;

    stateFilter.filter((item) => {
      if (item.name === selected) {
        state.code = item.code;
      }
    });

    setState({ ...state });

    filterCtx.updateState(state.code);

    setModalVisible(false);
  }

  return (
    <View>
      <Pressable
        style={styles.headerState}
        onPress={() => setModalVisible(true)}
        android_ripple={{ color: colors.gray800 }}
      >
        <Title style={styles.headerText}>{state.name}</Title>
        <Ionicons name="chevron-down" size={24} color={colors.gray800} />
      </Pressable>

      <Modal visible={modalVisible} animationType="slide">
        <View style={styles.modal}>
          <Pressable onPress={() => setModalVisible(false)}>
            <View style={styles.closeIcon}>
              <Ionicons name="chevron-down" size={30} />
            </View>

            <View style={styles.modalList}>
              {stateFilter.map((stateItem, index) => (
                <View key={index}>
                  <Pressable
                    onPress={onStateSelectHandler.bind(this, stateItem.name)}
                    android_ripple={{ color: colors.gray800 }}
                  >
                    <View style={styles.modalItem}>
                      <Title>{stateItem.name}</Title>
                      <View>
                        {stateItem.name == state.name && (
                          <Ionicons
                            name="checkmark-circle"
                            size={25}
                            color={colors.gray800}
                          />
                        )}
                      </View>
                    </View>
                  </Pressable>
                </View>
              ))}
            </View>
          </Pressable>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  headerState: {
    flexDirection: "row",
    alignItems: "center",
  },
  headerText: {
    marginRight: 5,
  },
  modal: {
    flex: 1,
    paddingTop: 50,
  },
  closeIcon: {
    alignSelf: "center",
  },
  modalList: {
    margin: 20,
  },
  modalItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: colors.gray300,
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
});
