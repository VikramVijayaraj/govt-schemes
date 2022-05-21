import { useCallback, useContext, useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Pressable,
  Image,
  ScrollView,
  ActivityIndicator,
  RefreshControl,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import { UserContext } from "../../store/user-context";
import colors from "../../config/colors";
import Card from "../UI/Card";
import Text from "../UI/Text";
import Title from "../UI/Title";
import { fetchAppliedSchemes } from "../../util/applied";
import { AppliedContext } from "../../store/applied-context";

export default function AppliedList() {
  const navigation = useNavigation();

  const { userData } = useContext(UserContext);
  const appliedCtx = useContext(AppliedContext);

  const [schemesList, setSchemesList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    setSchemesList([]);
  }, [refreshing]);

  useEffect(() => {
    setIsLoading(true);
    setSchemesList([]);

    async function getAppliedSchemes() {
      const schemes = await fetchAppliedSchemes(userData.uid);
      if (schemesList.length === 0) {
        for (let key in schemes) {
          setSchemesList((currentSchemes) => [...currentSchemes, schemes[key]]);
        }
      }
    }

    getAppliedSchemes();
    setIsLoading(false);
  }, [appliedCtx.schemes, refreshing]);

  const wait = (timeout) => {
    return new Promise((resolve) => setTimeout(resolve, timeout));
  };

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(100).then(() => setRefreshing(false));
  }, []);

  if (isLoading) return <ActivityIndicator size="large" color="dodgerblue" />;

  const listItems = schemesList;

  // if (listItems.length === 0) {
  //   return (
  //     <View style={styles.nothing}>
  //       <Text>No schemes found!</Text>
  //     </View>
  //   );
  // }

  function onPressHandler(details) {
    navigation.navigate("SchemeDetails", {
      details: details,
      applied: true,
    });
  }

  return (
    <ScrollView
      style={styles.container}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      {listItems.map((item, index) => (
        <View style={styles.cardContainer} key={index}>
          <Card style={styles.card}>
            <Pressable onPress={onPressHandler.bind(this, item)}>
              <View>
                <View style={styles.header}>
                  <Image
                    style={styles.image}
                    source={require("../../assets/images/emblem.png")}
                  />
                  <View style={styles.headerTitles}>
                    <Title style={styles.title}>{item.sname}</Title>
                    <Text style={styles.subtitle}>{item.dept}</Text>
                  </View>
                </View>

                <View style={styles.tags}>
                  <Text style={styles.highlight}>{item.seligible}</Text>
                  <Text
                    style={
                      item.status === "Active"
                        ? { color: "green" }
                        : { color: "red" }
                    }
                  >
                    {item.status}
                  </Text>
                </View>

                <View style={styles.statusContainer}>
                  <View style={styles.trackContainer}>
                    <Text className={styles.trackLabel}>Status:</Text>
                    <Text
                      style={
                        item.trackStatus
                          ? item.trackStatus === "Approved"
                            ? styles.approved
                            : styles.rejected
                          : styles.pending
                      }
                    >
                      {item.trackStatus ? item.trackStatus : "Pending"}
                    </Text>
                  </View>

                  <View>
                    {item.trackStatus === "Rejected" && (
                      <View>
                        {/* <Text className={styles.remark}>Remark:</Text> */}
                        <Text>{item.remark}</Text>
                      </View>
                    )}
                  </View>
                </View>
              </View>
            </Pressable>
          </Card>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  nothing: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  cardContainer: {
    marginHorizontal: 20,
  },
  card: {},
  header: {
    flexDirection: "row",
  },
  headerTitles: {
    flex: 1,
  },
  image: {
    height: 60,
    width: 40,
    marginRight: 7,
  },
  title: {
    fontSize: 15,
  },
  subtitle: {
    fontFamily: "work-sans-regular",
    color: colors.gray700,
  },
  tags: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  highlight: {
    backgroundColor: colors.primary400,
    color: "white",
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  statusContainer: {
    backgroundColor: colors.gray300,
    padding: 10,
    marginTop: 15,
    borderRadius: 10,
  },
  trackContainer: {
    flexDirection: "row",
  },
  trackLabel: {},
  approved: {
    color: "green",
    fontWeight: "bold",
    marginLeft: 5,
  },
  rejected: {
    color: "red",
    fontWeight: "bold",
    marginLeft: 5,
  },
  pending: {
    color: "orange",
    fontWeight: "bold",
    marginLeft: 5,
  },
  remark: {
    marginTop: 20,
  },
});
