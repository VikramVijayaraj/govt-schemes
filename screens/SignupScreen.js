import { useNavigation } from "@react-navigation/native";
import { useContext, useState } from "react";
import {
  Alert,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
} from "react-native";

import AuthContent from "../components/Auth/AuthContent";
import LoadingOverlay from "../components/UI/LoadingOverlay";
import colors from "../config/colors";
import { AuthContext } from "../store/auth-context";
import { UserContext } from "../store/user-context";
import { createUser } from "../util/auth";

function SignupScreen() {
  const navigation = useNavigation();

  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const authCtx = useContext(AuthContext);

  const { userData, setUserData } = useContext(UserContext);

  async function signupHandler({ email, password }) {
    setIsAuthenticating(true);
    try {
      const { token, userEmail, uId } = await createUser(email, password);
      authCtx.authenticate(token);

      userData.email = userEmail;
      userData.uid = uId;
      setUserData({ ...userData });
    } catch (error) {
      Alert.alert(
        "Authentication failed!",
        "Could not create user, please check your input and try again later!"
      );
      setIsAuthenticating(false);
    }
  }

  if (isAuthenticating) return <LoadingOverlay message="Creating user..." />;

  // if (!isAuthenticating) {
  //   navigation.navigate("BeneficiaryType");
  // }

  return (
    <ScrollView>
      <KeyboardAvoidingView style={styles.screen} behavior="position">
        <AuthContent onAuthenticate={signupHandler} />
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

export default SignupScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.gray100,
  },
});
