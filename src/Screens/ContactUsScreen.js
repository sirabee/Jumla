import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import MyButton from '../Components/MyButton';
// import { Provider } from 'react-redux';
// import { createStore } from 'redux';

export default function ContactUsScreen({navigation}) {

  return (
    <View>
      <Button
      title="Go to Home screen"
      onPress={() =>
        navigation.navigate('Home')
      }
    />
    <StatusBar style="auto" />
    </View>
  );
}

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
// }
// );