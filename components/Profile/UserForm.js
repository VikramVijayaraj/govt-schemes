import { useContext } from "react";
import { View, StyleSheet, ToastAndroid } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import FormCard from "./FormCard";
import Input from "../UI/Input";
import Button from "./Button";
import { UserContext } from "../../store/user-context";
import {  updateUserProfile } from "../../util/user";
import Text from "../UI/Text";

export default function UserForm({ create }) {
  const { userData, setUserData } = useContext(UserContext);

  const navigation = useNavigation();

  function optionHandler(selectedText) {
    if (selectedText === "Male" || selectedText === "Female") {
      userData.gender = selectedText;
      setUserData({ ...userData });
    } else if (selectedText === "Student" || selectedText === "Employed") {
      userData.category = selectedText;
      setUserData({ ...userData });
    } else if (selectedText === "Single" || selectedText === "Married") {
      userData.maritalStatus = selectedText;
      setUserData({ ...userData });
    } else if (selectedText === "Normal" || selectedText === "Disabled") {
      userData.pwdStatus = selectedText;
      setUserData({ ...userData });
    }
  }

  function inputHandler(label, enteredValue) {
    setUserData((currentInputValues) => {
      return {
        ...currentInputValues,
        [label]: enteredValue,
      };
    });
  }

  function submitHandler() {
    updateUserProfile(userData);

    if (create) {
      navigation.navigate("AppBottomTabs");
      ToastAndroid.show("Profile Added!", ToastAndroid.SHORT);
    } else {
      navigation.navigate("Profile");
      ToastAndroid.show("Profile updated!", ToastAndroid.SHORT);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Input
          label="First Name"
          placeholder="Steve"
          icon={<Ionicons name="pencil" size={17} />}
          onChangeText={inputHandler.bind(this, "firstName")}
        />
        <Input
          label="Last Name"
          placeholder="Jobs"
          icon={<Ionicons name="pencil" size={17} />}
          onChangeText={inputHandler.bind(this, "lastName")}
        />
      </View>
      <View style={styles.row}>
        <Input
          label="Date of birth"
          placeholder="DD-MM-YYYY"
          icon={<Ionicons name="pencil" size={17} />}
          onChangeText={inputHandler.bind(this, "dateOfBirth")}
        />
        <Input
          label="Age"
          placeholder="0-99"
          icon={<Ionicons name="pencil" size={17} />}
          onChangeText={inputHandler.bind(this, "age")}
        />
      </View>

      {/* Cards */}
      <FormCard
        label="Gender"
        text1="Male"
        text2="Female"
        pressed={optionHandler}
      />

      <FormCard
        label="Category"
        text1="Student"
        text2="Employed"
        pressed={optionHandler}
      />

      <FormCard
        label="Marital Status"
        text1="Single"
        text2="Married"
        pressed={optionHandler}
      />

      <FormCard
        label="PWD Status"
        text1="Normal"
        text2="Disabled"
        pressed={optionHandler}
      />

      <Button containerStyle={styles.updateBtn} onPress={submitHandler}>
        <Text style={styles.btnText}>
          {create ? "Add Profile" : "Update Profile"}
        </Text>
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    paddingHorizontal: 20,
  },
  image: {
    height: 70,
    width: 70,
    marginRight: 20,
  },
  cameraIcon: {
    color: "#95D1CC",
    position: "absolute",
    top: 40,
    left: 50,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  updateBtn: {
    elevation: 4,
    marginVertical: 15,
    borderRadius: 10,
    width: "100%",
  },
  btnText: {
    color: "white",
    fontSize: 18,
  },
});
