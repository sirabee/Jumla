import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import MyButton from '../Components/MyButton';

export default function HomeScreen({navigation}) {

  const user = useSelector((state) => state.username)

  const dispatch = useDispatch()

  function addUser(user){
    const action = {
      type: "ADD_USER",
      payload: user
    }
    dispatch(action)
  }

  function removeUser(user){
    const action = {
      type: "REMOVE_USER",
      payload: user
    }
    dispatch(action)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>This is SiRadio!</Text>
      <MyButton details="Cool button"></MyButton>
      <Button title='Home Screen' color="red">

      </Button>
      <Text> HomeScreen page</Text>
      <Button
      title="Go to About us"
      onPress={() =>
        navigation.navigate('About Us', {name: 'Sirad'})
      }
    />
    <Text>User: {user}</Text> 
    <Button title={"ADD USER"} onPress={() => addUser("Amy")}></Button> 
    <Button title={"REMOVE USER"} onPress={() => removeUser("Amy")}></Button>
      
    
      <StatusBar style="auto" />
      </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    // padding: 20,
    // marging: 10,
    // flexDirection: "column",
  },

  top: {
    flex: 1,
    backgroundColor: 'grey',
    // borderWidth: 1,
    // borderTopLeftRadius: 5,
    // borderTopRightRadius: 5,
  },

  middle: {
    flex: 1,
    backgroundColor: 'beige',
    // borderWidth: 2,
     alignItems: 'center',
    justifyContent: 'center',
  },

  bottom: {
    flex: 1,
    backgroundColor: 'pink',
    // borderWidth: 1,
    // borderBottomLeftRadius: 5,
    // borderBottomRightRadius: 5,
  },

  textStyle: {
    color: '#196F3D',
    fontSize: 30,
    fontWeight: 'normal',
    letterSpacing: 0.25,
    textDecorationLine: 'none',
  },
});