import { View, StyleSheet, ScrollView } from "react-native";

import ProfileHeader from "../components/Profile/ProfileHeader";
import UserDetails from "../components/Profile/UserDetails";

export default function ProfileScreen() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <ProfileHeader />
        <UserDetails />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "white",
  },
});
