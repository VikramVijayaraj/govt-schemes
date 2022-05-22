import { StatusBar } from "expo-status-bar";
import { useContext, useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

import colors from "./config/colors";
import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";
import HomeScreen from "./screens/HomeScreen";
import ProfileScreen from "./screens/ProfileScreen";
import AppliedSchemesScreen from "./screens/AppliedSchemesScreen";
import SchemeDetailsScreen from "./screens/SchemeDetailsScreen";
import DocsUploadScreen from "./screens/DocsUploadScreen";
import OnApplyScreen from "./screens/OnApplyScreen";
import AuthContextProvider, { AuthContext } from "./store/auth-context";
import UpdateProfile from "./components/Profile/UpdateProfile";
import UserContextProvider from "./store/user-context";
import FilePreviewScreen from "./screens/FilePreviewScreen";
import FilterContextProvider from "./store/filter-context";
import AppliedContextProvider from "./store/applied-context";
import BeneficiaryTypeScreen from "./screens/BeneficiaryTypeScreen";
import CreateProfileScreen from "./screens/CreateProfileScreen";

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

function AppBottomTabs() {
  return (
    <BottomTabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: colors.gray100,
          // height: 60,
        },
        tabBarActiveTintColor: colors.primary400,
        // tabBarShowLabel: false,
      }}
    >
      <BottomTabs.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
      />
      <BottomTabs.Screen
        name="AppliedSchemes"
        component={AppliedSchemesScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="checkbox" color={color} size={size} />
          ),
          title: "Applied",
        }}
      />
      <BottomTabs.Screen
        name="DocsUpload"
        component={DocsUploadScreen}
        options={{
          title: "Upload",
          tabBarIcon: ({ color, size }) => (
            <Feather name="upload" size={size} color={color} />
          ),
        }}
      />
      <BottomTabs.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" color={color} size={size} />
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
}

function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: "center",
        headerShown: false,
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
    </Stack.Navigator>
  );
}

function AuthenticatedStack() {
  const navigation = useNavigation();
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: "center",
        headerShown: false,
        contentStyle: { color: "white" },
      }}
    >
      <Stack.Screen name="AppBottomTabs" component={AppBottomTabs} />

      <Stack.Screen name="BeneficiaryType" component={BeneficiaryTypeScreen} />
      <Stack.Screen name="CreateProfile" component={CreateProfileScreen} />

      <Stack.Screen
        name="SchemeDetails"
        component={SchemeDetailsScreen}
        options={{
          title: "",
          headerShown: true,
          headerTransparent: true,
          headerTintColor: colors.gray100,
          // headerRight: () => (
          //   <Ionicons name="star-outline" size={20} color={colors.gray100} />
          // ),
        }}
      />

      <Stack.Screen
        name="OnApply"
        component={OnApplyScreen}
        options={{
          title: "",
          headerShown: true,
          headerTransparent: true,
          headerTintColor: colors.gray100,
          headerLeft: () => (
            <Ionicons
              name="arrow-back"
              size={25}
              color="white"
              onPress={() => navigation.navigate("Home")}
            />
          ),
        }}
      />

      <Stack.Screen
        name="UpdateProfile"
        component={UpdateProfile}
        options={{
          title: "Update Profile",
          headerShown: true,
          // headerTransparent: true,
          headerTintColor: colors.gray800,
        }}
      />

      <Stack.Screen
        name="FilePreview"
        component={FilePreviewScreen}
        options={{
          title: "Preview",
          headerShown: true,
          // headerTransparent: true,
          headerTintColor: colors.gray800,
        }}
      />
    </Stack.Navigator>
  );
}

function Navigation() {
  const authCtx = useContext(AuthContext);

  return (
    <NavigationContainer>
      {!authCtx.isAuthenticated && <AuthStack />}
      {authCtx.isAuthenticated && <AuthenticatedStack />}
      {/* <AuthenticatedStack /> */}
    </NavigationContainer>
  );
}

function Root() {
  const [isTryingLogin, setIsTryingLogin] = useState(true);

  const authCtx = useContext(AuthContext);

  useEffect(() => {
    async function fetchToken() {
      const storedToken = await AsyncStorage.getItem("token");

      if (storedToken) {
        authCtx.authenticate(storedToken);
      }

      setIsTryingLogin(false);
    }

    if (isTryingLogin) return <AppLoading />;

    fetchToken();
  }, []);

  return <Navigation />;
}

export default function App() {
  const [fontsLoaded] = useFonts({
    "work-sans-light": require("./assets/fonts/WorkSans-Light.ttf"),
    "work-sans-regular": require("./assets/fonts/WorkSans-Regular.ttf"),
    "work-sans-bold": require("./assets/fonts/WorkSans-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <StatusBar style="auto" />

      <View style={styles.container}>
        <AuthContextProvider>
          <UserContextProvider>
            <FilterContextProvider>
              <AppliedContextProvider>
                <Root />
              </AppliedContextProvider>
            </FilterContextProvider>
          </UserContextProvider>
        </AuthContextProvider>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
