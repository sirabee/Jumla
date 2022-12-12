import HomeScreen from "./src/Screens/HomeScreen";
import AboutUsScreen from "./src/Screens/AboutUsScreen";
import ContactUsScreen from "./src/Screens/ContactUsScreen";
import ProfileScreen from "./src/Screens/ProfileScreen";

import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { ThemeProvider } from "@rneui/themed";
import { customTheme } from "./assets/theme/Index";
import { Ionicons } from "@expo/vector-icons";


export default function App() {

  const Tab = createBottomTabNavigator()

  function userReducer (state, action){
    switch(action.type){
      case "ADD_USER":
        console.log('add')
        return state.username = {...state, username: action.payload}
      case "REMOVE_USER":
        console.log('remove')
        return state.username = {...state, username: "None"}
      default:
        console.log('default')
        return state
    }
  }

  const initialState = {username: "No user is set yet"}

  const store = createStore(userReducer, initialState)

  return (
    <Provider store={store}>
    <NavigationContainer>
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
    </NavigationContainer>
    </Provider>
  );
}