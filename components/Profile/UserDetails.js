import { useContext, useEffect } from "react";
import { View, StyleSheet } from "react-native";

import { UserContext } from "../../store/user-context";
import { fetchUser } from "../../util/user";
import Card from "../UI/Card";
import Text from "../UI/Text";
import Title from "../UI/Title";

export default function UserDetails() {
  const { userData, setUserData } = useContext(UserContext);

  useEffect(() => {
    async function getUserData() {
      const data = await fetchUser(userData.uid);
      console.log(data);
      if (data) {
        setUserData({ ...data });
      } else {
        console.log("No data found!");
      }
    }

    getUserData();
  }, []);

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Text>User Name</Text>
        <Title>
          {userData.firstName} {userData.lastName}
        </Title>
      </Card>
      <Card style={styles.card}>
        <Text>Date Of Birth</Text>
        <Title>{userData.dateOfBirth}</Title>
      </Card>
      <Card style={styles.card}>
        <Text>Age</Text>
        <Title>{userData.age}</Title>
      </Card>
      <Card style={styles.card}>
        <Text>Gender</Text>
        <Title>{userData.gender}</Title>
      </Card>
      <Card style={styles.card}>
        <Text>Category</Text>
        <Title>{userData.category}</Title>
      </Card>
      <Card style={styles.card}>
        <Text>Marital Status</Text>
        <Title>{userData.maritalStatus}</Title>
      </Card>
      <Card style={styles.card}>
        <Text>PWD Status</Text>
        <Title>{userData.pwdStatus}</Title>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  card: {
    elevation: 2,
    borderRadius: 8,
  },
});
