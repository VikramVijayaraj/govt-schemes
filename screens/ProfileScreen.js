import { View, StyleSheet, ScrollView } from "react-native";

import ProfileHeader from "../components/Profile/ProfileHeader";
import UserForm from "../components/Profile/UserForm";

export default function ProfileScreen() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <ProfileHeader />
        <UserForm />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 20,
  },
});
