import { StatusBar } from "expo-status-bar";
import { View, StyleSheet, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
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
import SchemeDetails from "./screens/SchemeDetails";
import DocsUploadScreen from "./screens/DocsUploadScreen";

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

// function AppDrawer() {
//   return (
//     <Drawer.Navigator>
//       <Drawer.Screen name="AppBottomTabs" component={AppBottomTabs} />
//     </Drawer.Navigator>
//   );
// }

function AppBottomTabs() {
  return (
    <BottomTabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: colors.tabs },
        tabBarActiveTintColor: "white",
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
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerTitleAlign: "center",
              headerShown: false,
            }}
          >
            {/* <Stack.Screen name="Login" component={LoginScreen} /> */}
            {/* <Stack.Screen name="Signup" component={SignupScreen} /> */}

            <Stack.Screen name="AppBottomTabs" component={AppBottomTabs} />

            {/* <Stack.Screen name="AppDrawer" component={AppDrawer} /> */}

            <Stack.Screen
              name="SchemeDetails"
              component={SchemeDetails}
              options={{
                title: "About the scheme",
                headerShown: true,
                headerRight: () => <Ionicons name="star-outline" size={20} />,
                // headerStyle: { backgroundColor: colors.primary400 },
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
  },
});
