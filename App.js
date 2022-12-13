import HomeScreen from "./src/Screens/HomeScreen";
import AboutUsScreen from "./src/Screens/AboutUsScreen";
import ContactUsScreen from "./src/Screens/ContactUsScreen";
import ProfileScreen from "./src/Screens/ProfileScreen";
import SignInScreen from "./src/Screens/SignInScreen";
import Navigation from "./src/Navigation/Index";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView, StyleSheet } from "react-native";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { ThemeProvider } from "@rneui/themed";
import { customTheme } from "./assets/theme/Index";
import { Ionicons } from "@expo/vector-icons";
import React from "react";

export default function App() {

const Stack = createNativeStackNavigator();

  return(
    <SafeAreaView style={styles.root}>
    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen 
      name="SignIn" 
      component={SignInScreen}
      options={{ headerShown: false }} 
      />
    <Stack.Screen 
      name="Navigation" 
      component={Navigation}
      options={{ headerShown: false }} 
      />
      <Stack.Screen
      name="Home"
      component={HomeScreen}
      />
      <Stack.Screen
      name="About Us"
      component={AboutUsScreen}
      /> 
      <Stack.Screen
      name="Profile"
      component={ProfileScreen}
      /> 
    </Stack.Navigator>
    </NavigationContainer>
    </SafeAreaView>
  );
};

  const styles = StyleSheet.create({
    root: {
      flex: 1,
      backgroundColor: '#f9fbfc',
    }
  
  })

