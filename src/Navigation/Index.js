import React from "react";
import {View, Tex} from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from "@expo/vector-icons";

// import SignInScreen from "../Screens/SignInScreen";
import HomeScreen from "../Screens/HomeScreen";
import AboutUsScreen from "../Screens/AboutUsScreen";
import ProfileScreen from "../Screens/ProfileScreen";
import ContactUsScreen from "../Screens/ContactUsScreen";

export default function Navigation() {

const Tab = createBottomTabNavigator();

  return (
      <Tab.Navigator>
      <Tab.Screen 
      name="Home" 
      component={HomeScreen}
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="home-outline" color={color} size={size}/>
        ),
      }}
       />
      <Tab.Screen 
      name="About Us" 
      component={AboutUsScreen}
      options={{
        tabBarLabel: 'About Us',
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="card-outline" color={color} size={size}/>
        ),
      }}
       />
      <Tab.Screen 
      name="Profile" 
      component={ProfileScreen}
      options={{
        tabBarLabel: 'Profile',
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="pricetags-outline" color={color} size={size}/>
        ),
      }}
      />
      <Tab.Screen 
      name="Contact Us" 
      component={ContactUsScreen}
      options={{
        tabBarLabel: 'Contact Us',
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="pie-chart-outline" color={color} size={size}/>
        ),
      }}
      />
      </Tab.Navigator>
  );
};
