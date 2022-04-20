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
import { login } from "../util/auth";

function LoginScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const authCtx = useContext(AuthContext);

  const { userData, setUserData } = useContext(UserContext);

  async function loginHandler({ email, password }) {
    setIsAuthenticating(true);
    try {
      const { token, userEmail, uId } = await login(email, password);
      authCtx.authenticate(token);

      userData.email = userEmail;
      userData.uid = uId;
      setUserData({ ...userData });
      console.log("Login Screen");
      console.log(userData);
    } catch (error) {
      Alert.alert(
        "Authentication failed!",
        "Could not log you in. Please check your credentials or try again later!"
      );
    }
    setIsAuthenticating(false);
  }

  if (isAuthenticating) return <LoadingOverlay message="Logging you in..." />;

  return (
    <ScrollView style={styles.screen}>
      <KeyboardAvoidingView style={styles.screen} behavior="position">
        <AuthContent isLogin onAuthenticate={loginHandler} />
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

export default LoginScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.gray100,
  },
  or: {
    alignSelf: "center",
    marginVertical: 10,
  },
});

// import {
//   View,
//   StyleSheet,
//   KeyboardAvoidingView,
//   ScrollView,
// } from "react-native";

// import LoginButton from "../components/Login/LoginButton";
// import LoginForm from "../components/Login/LoginForm";
// import LoginHeader from "../components/Login/LoginHeader";
// import LoginProviders from "../components/Login/LoginProviders";
// import Text from "../components/UI/Text";

// export default function LoginScreen() {
//   return (
//     <ScrollView>
//       <KeyboardAvoidingView style={styles.screen} behavior="position">
//         <View style={styles.container}>
//           <LoginHeader />
//           <LoginProviders />

//           <Text style={styles.or}>OR</Text>

//           <LoginForm />

//           <LoginButton />
//         </View>
//       </KeyboardAvoidingView>
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   screen: {
//     flex: 1,
//   },
//   container: {
//     flex: 1,
//   },
//   or: {
//     alignSelf: "center",
//     marginVertical: 10,
//   },
// });
