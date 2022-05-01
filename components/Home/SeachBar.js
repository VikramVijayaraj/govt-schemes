import { useContext, useEffect, useState } from "react";
import { View, StyleSheet, TextInput, ActivityIndicator } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import colors from "../../config/colors";
import List from "./List";
import SchemesCount from "./SchemesCount";
import SchemesFilter from "./SchemesFilter";
import { fetchSchemes } from "../../util/schemes";
import { FilterContext } from "../../store/filter-context";
import Text from "../UI/Text";

export default function SeachBar() {
  const filterCtx = useContext(FilterContext);

  const [searchQuery, setSearchQuery] = useState("");
  const [stateSchemes, setStateSchemes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getSchemes() {
      setIsLoading(true);
      const schemes = await fetchSchemes(filterCtx.state);
      setStateSchemes([schemes]);
    }

    getSchemes();
    setIsLoading(false);
  }, [filterCtx.state]);

  if (isLoading) return <ActivityIndicator color="dodgerblue" size="large" />;

  function inputHandler(enteredText) {
    setSearchQuery(enteredText);
  }

  return (
    <>
      <View style={styles.container}>
        <View style={styles.left}>
          <Ionicons style={styles.icon} name="search-outline" size={20} />
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Search schemes!"
              onChangeText={inputHandler}
            />
          </View>
        </View>

        {/* <View style={styles.closeIconContainer}>
          {searchQuery && <Ionicons name="close" color={colors.gray800} />}
        </View> */}
      </View>

      <View style={styles.info}>
        <SchemesCount />
        <SchemesFilter />
      </View>

      {searchQuery ? (
        <List listItems={stateSchemes} query={searchQuery} />
      ) : (
        <List listItems={stateSchemes} />
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: colors.gray100,
    height: 40,
    borderRadius: 10,
    padding: 10,
    marginHorizontal: 20,
  },
  left: {
    flexDirection: "row",
  },
  info: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
    marginHorizontal: 20,
  },
  icon: {
    marginRight: 8,
    color: colors.gray800,
  },
  inputContainer: {
    flex: 1,
  },
  input: {
    color: colors.gray700,
  },
  closeIconContainer: {},
});
