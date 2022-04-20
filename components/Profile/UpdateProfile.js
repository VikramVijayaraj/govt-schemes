import { StyleSheet, ScrollView } from "react-native";

import Text from "../UI/Text";
import UserForm from "./UserForm";

export default function UpdateProfile() {
  return (
    <ScrollView style={styles.container}>
      <UserForm />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
