import React, {useState} from "react";
import {View, Text, Image, StyleSheet, useWindowDimensions, SafeAreaView} from 'react-native';
import CustomInput from "../Components/CustomInputs/CustomInput";
import CustomButton from "../Components/CustomButtons/CustomButton";
import Logo from "../../assets/images/Logo.png";
import { useNavigation } from "@react-navigation/native";
import { Provider, useSelector, useDispatch } from 'react-redux';
import { createStore } from 'redux';

export default function SignInScreen() {

const user = useSelector((state) => state.username)

  const dispatch = useDispatch()

  function addUser(user){
    const action = {
      type: "ADD_USER",
      payload: user
    }
    dispatch(action)
  }

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const {height} = useWindowDimensions();

    const navigation = useNavigation();
  
    function onSignInPressed() {
    //   console.warn("Sign in");
    // addUser({username});
    
    navigation.navigate('Home');
    };
  
    function onForgotPasswordPressed() {
      console.warn("onForgotPasswordPressed");
    }
  
    return (
     <View style={styles.root}>
        <Image
        source={Logo}
        style={[styles.logo, {height: height *0.3}]}
        resizeMode="contain"
        />
  
        <CustomInput 
        placeholder="Username"
        value={username} 
        setValue={setUsername} 
        />
        
        <CustomInput 
        placeholder="Password" 
        value={password}
        setValue={setPassword}
        secureTextEntry={true}
        />
          
        <CustomButton text="Sign In" onPress={onSignInPressed} />
        <CustomButton
        text="Forgot password?" 
        onPress={onForgotPasswordPressed}
        type="Tertiary" 
        />
        </View>
      );
  };
  
  const styles = StyleSheet.create({
      root: {
          alignItems: 'center',
          padding: 20,
          justifyContent: 'center',
      },
      logo: {
          width: '70%',
          maxWidth: 300,
          maxHeight: 200,
      }
  })
