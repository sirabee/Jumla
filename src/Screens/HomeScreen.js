// import AboutUsScreen from "../Screens/AboutUsScreen";
// import ContactUsScreen from "../Screens/ContactUsScreen";
// import ProfileScreen from "../Screens/ProfileScreen";
// import SignInScreen from "../Screens/SignInScreen";
import Navigation from "../Navigation/Index";

import React, {useState} from "react";
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, useWindowDimensions, Image, SafeAreaView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import MyButton from '../Components/MyButton';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CustomInput from "../Components/CustomInputs/CustomInput";
import CustomButton from "../Components/CustomButtons/CustomButton";
import Logo from "../../assets/images/Logo.png";


export default function HomeScreen({navigation}) {
  
  return (
    <View>
      <Text>Home</Text>
    </View>
  );
};

  // function userReducer (state, action){
  //   switch(action.type){
  //     case "ADD_USER":
  //       console.log('add')
  //       return state.username = {...state, username: action.payload}
  //     case "REMOVE_USER":
  //       console.log('remove')
  //       return state.username = {...state, username: "None"}
  //     default:
  //       console.log('default')
  //       return state
  //   }
  // }

  // const initialState = {username: "No user is set yet"}

  // const store = createStore(userReducer, initialState)

//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const {height} = useWindowDimensions();

//   function onSignInPressed() {
//     console.warn("Sign in")
//   };

//   function onForgotPasswordPressed() {
//     console.warn("onForgotPasswordPressed")
//   }

//   return (
//     <SafeAreaView style={styles.root}>
//     {/* <Provider store={store}>    */}

      
//       <View style={styles.root}>
//       <Image
//       source={Logo}
//       style={[styles.logo, {height: height *0.3}]}
//       resizeMode="contain"
//       />

//       <CustomInput 
//       placeholder="Username"
//       value={username} 
//       setValue={setUsername} 
//       />
      
//       <CustomInput 
//       placeholder="Password" 
//       value={password}
//       setValue={setPassword}
//       secureTextEntry={true}
//       />
        
//       <CustomButton text="Sign In" onPress={onSignInPressed} />
//       <CustomButton
//       text="Forgot password?" 
//       onPress={onForgotPasswordPressed}
//       type="Tertiary" 
//       />
//       </View>
//     {/* </Provider> */}
//     </SafeAreaView>
//     );
// };

// const styles = StyleSheet.create({
//     root: {
//         alignItems: 'center',
//         padding: 20,
//         justifyContent: 'center',
//     },
//     logo: {
//         width: '70%',
//         maxWidth: 300,
//         maxHeight: 200,
//     }
// })

// export default function HomeScreen({navigation}) {

//   const user = useSelector((state) => state.username)

//   const dispatch = useDispatch()

//   function addUser(user){
//     const action = {
//       type: "ADD_USER",
//       payload: user
//     }
//     dispatch(action)
//   }

//   function removeUser(user){
//     const action = {
//       type: "REMOVE_USER",
//       payload: user
//     }
//     dispatch(action)
//   }

//   return (
//     <View style={styles.container}>
//       <Text style={styles.textStyle}>This is SiRadio!</Text>
//       <MyButton details="Cool button"></MyButton>
//       <Button title='Home Screen' color="red">

//       </Button>
//       <Text> HomeScreen page</Text>
//       <Button
//       title="Go to About us"
//       onPress={() =>
//         navigation.navigate('About Us', {name: 'Sirad'})
//       }
//     />
//     <Text>User: {user}</Text> 
//     <Button title={"ADD USER"} onPress={() => addUser("Amy")}></Button> 
//     <Button title={"REMOVE USER"} onPress={() => removeUser("Amy")}></Button>
      
    
//       <StatusBar style="auto" />
//       </View>

//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'white',
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: 20,
//     marging: 10,
//     flexDirection: "column",
//   },

//   top: {
//     flex: 1,
//     backgroundColor: 'grey',
//     // borderWidth: 1,
//     // borderTopLeftRadius: 5,
//     // borderTopRightRadius: 5,
//   },

//   middle: {
//     flex: 1,
//     backgroundColor: 'beige',
//     // borderWidth: 2,
//      alignItems: 'center',
//     justifyContent: 'center',
//   },

//   bottom: {
//     flex: 1,
//     backgroundColor: 'pink',
//     // borderWidth: 1,
//     // borderBottomLeftRadius: 5,
//     // borderBottomRightRadius: 5,
//   },

//   textStyle: {
//     color: '#196F3D',
//     fontSize: 30,
//     fontWeight: 'normal',
//     letterSpacing: 0.25,
//     textDecorationLine: 'none',
//   },
// });


// import { StatusBar } from 'expo-status-bar';
// import { Button, StyleSheet, Text, View } from 'react-native';
// import MyButton from '../Components/MyButton';

// export default function HomeScreen() {
  
//     return (
//       <View style={styles.container}>
//         <View style={styles.top} />
//         <View style={styles.middle}>
//         <Text style={styles.textStyle}>This is SiRadio!</Text>
//         <MyButton details="Cool button"></MyButton>
//         <Button title="About Us" color="red">

//         </Button>
//         <Text> About Us page</Text>
//         <Text>Welcome</Text>
//     <Button
//     title="Go to Home screen"
//     onPress={() =>
//       navigation.navigate('Home')
//     }
//   />
//         </View>
//         <View style={styles.bottom} />
        
      
//         <StatusBar style="auto" />
//         </View>
  
//     );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     // alignItems: 'center',
//     // justifyContent: 'center',
//     // padding: 20,
//     // marging: 10,
//     // flexDirection: "column",
//   },

//   top: {
//     flex: 1,
//     backgroundColor: 'grey',
//     // borderWidth: 1,
//     // borderTopLeftRadius: 5,
//     // borderTopRightRadius: 5,
//   },

//   middle: {
//     flex: 1,
//     backgroundColor: 'beige',
//     // borderWidth: 2,
//      alignItems: 'center',
//     justifyContent: 'center',
//   },

//   bottom: {
//     flex: 1,
//     backgroundColor: 'pink',
//     // borderWidth: 1,
//     // borderBottomLeftRadius: 5,
//     // borderBottomRightRadius: 5,
//   },

//   textStyle: {
//     color: '#196F3D',
//     fontSize: 30,
//     fontWeight: 'normal',
//     letterSpacing: 0.25,
//     textDecorationLine: 'none',
//   },
// });
