import { useEffect, useState } from "react";
import { View, StyleSheet, ScrollView, ActivityIndicator } from "react-native";

import ProfileHeader from "../components/Profile/ProfileHeader";
import UserDetails from "../components/Profile/UserDetails";

export default function ProfileScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);

  return (
    <ScrollView style={styles.container}>
      {isLoading ? (
        <ActivityIndicator
          size="large"
          color="dodgerblue"
          style={styles.activityIndicator}
        />
      ) : (
        <View style={styles.container}>
          <ProfileHeader />
          <UserDetails />
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  activityIndicator: {
    marginTop: "100%",
  },
});
