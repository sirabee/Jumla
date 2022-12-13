import React from "react";
import { View, Text, StyleSheet, Pressable} from 'react-native';

export default function CustomButton({ onPress, text, type = "Primary", bgColor, fgColor }) {
    return(
        <Pressable 
        onPress={onPress} 
        style={[
            styles.container, 
            styles[`container_${type}`],
            bgColor ? {backgroundColor: bgColor} : {}
            ]}>
        <Text style={[styles.text, styles[`text_${type}`]]}>{text}</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
   container: {
    width: '100%',
    padding: 15,
    marginVertical: 5,
    alignItems: 'center',
    borderRadius: 5,
   },
   text: {
    fontWeight: 'bold',
    color: 'white',
   },
   container_Primary: {
    backgroundColor: '#3B71F3',
   },
   container_Tertiary: {

   },
   text_Tertiary: {
    color: 'gray',
   }
})
    
