import { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import FormCard from "./FormCard";
import Input from "../UI/Input";
import Button from "./Button";
import { UserContext } from "../../store/user-context";
import { storeUser } from "../../util/user";

export default function UserForm() {
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

  async function submitHandler() {
    await storeUser(userData);
    navigation.navigate("Profile");
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
        Update Profile
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
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  updateBtn: {
    elevation: 4,
    marginVertical: 15,
    // position: "absolute",
    // bottom: 50,
  },
});

{
  /* <UserFormRow
        label1="First Name"
        placeholder1="Sai"
        icon1="pencil"
        label2="Last Name"
        placeholder2="Prasanth"
        icon2="pencil"
        userInputs={inputHandler}
      />
      <UserFormRow
        label1="Date of birth"
        placeholder1="DD-MM-YYYY"
        icon1="calendar"
        label2="Age"
        placeholder2="0-99"
        icon2="chevron-down"
        userInputs={inputHandler}
      /> */
}
