import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image,
  TextInput
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';
import { Linking } from 'react-native';
 import { LinearGradient } from "expo-linear-gradient";
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const lab03_1d = () => {
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };
  return (
    <LinearGradient
      style={{
        height: screenHeight,
      }}
      locations={[0, 1]}
      colors={['#fbcb00', '#bf9a00']}
      >
    <View
      style={{
        flex: 1,        
      }}>
      <View
        style={{
          flex: 2,
          justifyContent: 'center',
        }}>
        <Text style={{fontSize: 30, fontWeight:700, textTransform: 'uppercase', paddingLeft:30}}>Login</Text>
      </View>
      <View
        style={{
          flex: 2,
          alignItems: 'center',
          justifyContent: 'space-around',
        }}>
        <View style={{flexDirection:'row',borderWidth:1, borderColor:'#F2F2F2', alignItems:'center',backgroundColor:'#C4C4C44D'}}>
          <View style={{alignItems:'center', justifyContent:'center',width:54, height:54}}>
            <Icon
              name={'user-large'}
              size={30}
              color="black" />
           </View>
          <TextInput style={[styles.textInput,{width: 261}]} placeholder='Email'/>
        </View>
        <View style={{
          flexDirection:'row',
          width: 315,
          backgroundColor:'#C4C4C44D',
          borderWidth:1, 
          borderColor:'#F2F2F2',
        }}>
        <View style={{alignItems:'center', justifyContent:'center',width:54, height:54}}>
          <Icon
              name={'lock'}
              size={30}
              color="black" />
        </View>
        <TextInput style={[styles.textInput,{width:207}]} 
          placeholder='Password' 
          secureTextEntry={!isPasswordVisible} 
          />
          <TouchableOpacity onPress={togglePasswordVisibility} 
          style={{height: 54, width: 54,justifyContent:'center', alignItems:'center'}}>
            <Icon
              name={isPasswordVisible ? 'eye' : 'eye-slash'}
              size={30}
              color="black"/>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          flex: 2,
          alignItems: 'center',
          justifyContent: 'center',
          width:screenWidth,
        }}>
        <TouchableOpacity style={styles.buttonStyle}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flex: 2,
          alignItems: 'center',
          justifyContent: 'flex-start',
        }}>
        <Text style={styles.paragraph}>
          Create Account
        </Text>
      </View>
    </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  paragraph: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 700,
    textTransform:'uppercase'
  },
  buttonStyle: {
    width: 320,
    height: 45,
    backgroundColor: '#060000',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:3
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 700,
    textTransform: 'uppercase',
    color:'#FFF'
  },
  textInput:{
    height: 54,
    fontSize: 18,
    paddingHorizontal: 15,
  },
});

export default lab03_1d;
