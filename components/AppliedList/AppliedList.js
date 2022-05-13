import { useContext, useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Pressable,
  Image,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import { UserContext } from "../../store/user-context";
import colors from "../../config/colors";
import Card from "../UI/Card";
import Text from "../UI/Text";
import Title from "../UI/Title";
import { fetchAppliedSchemes } from "../../util/applied";
import { AppliedContext } from "../../store/applied-context";

export default function AppliedList({ listItems }) {
  const navigation = useNavigation();

  const { userData } = useContext(UserContext);
  const appliedCtx = useContext(AppliedContext);

  const [schemesList, setSchemesList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setSchemesList([]);
    setIsLoading(true);
    async function getAppliedSchemes() {
      const schemes = await fetchAppliedSchemes(userData.uid);
      for (let key in schemes) {
        setSchemesList((currentSchemes) => [...currentSchemes, schemes[key]]);
      }
    }

    getAppliedSchemes();
    setIsLoading(false);
  }, [appliedCtx.schemes]);

  if (isLoading) return <ActivityIndicator size="large" color="dodgerblue" />;

  listItems = schemesList;

  if (listItems.length === 0) {
    return (
      <View style={styles.nothing}>
        <Text>No schemes found!</Text>
      </View>
    );
  }

  function onPressHandler(details) {
    navigation.navigate("SchemeDetails", {
      details: details,
      applied: true,  
    });
  }

  return (
    <ScrollView style={styles.container}>
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
                    <Title style={styles.title}>{item.name}</Title>
                    <Text style={styles.subtitle}>{item.department}</Text>
                  </View>
                </View>

                <View style={styles.tags}>
                  <Text style={styles.highlight}>{item.beneficiary}</Text>
                  <Text>{item.benefits}</Text>
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
});
