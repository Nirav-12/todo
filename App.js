import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import InputeText from './src/InputeText';
import LoginButton from './src/LoginButton';


export default function App() {
  const Validation = () => { if (name.length > 0 && pass.length > 0) { return true } }
  



  const [name, setName] = useState();
  const [pass, setPass] = useState();
  return (
    <View style={styles.container}>


      <Text style={styles.text}>User Name</Text>
      <InputeText onChangeText={(user) => setName(user)} />


      <View style={{ margin: 10 }}></View>


      <Text style={styles.text} >PassWord</Text>
      <InputeText secureTextEntry onChangeText={() => setPass()} />

      <View style={{ margin: 30 }}></View>

      <LoginButton
        title="Login"
        color="red"
        onPress={() => {
        
          if (Validation()) {
            alert(`${name}`)
          }
          else {
            alert('enter value')

          }
        }}

      />



      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
  text: {
    alignSelf: "flex-start",
    marginLeft: 40


  },
});
