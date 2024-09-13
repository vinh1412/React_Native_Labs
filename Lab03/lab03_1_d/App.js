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
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const lab03_1d = () => {
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'#31AA5230'
      }}>
      <View
        style={{
          flex: 2,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{fontSize: 25, fontWeight:700, textTransform: 'uppercase'}}>Login</Text>
      </View>
      <View
        style={{
          flex: 2,
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <TextInput style={styles.textInput} placeholder='Email'/>
        <View style={{
          flexDirection:'row',
          width: 315,
          backgroundColor:'#C4C4C44D'
        }}>
        <TextInput style={styles.textInput} 
          placeholder='Password' 
          secureTextEntry={!isPasswordVisible} 
          />
          <TouchableOpacity onPress={togglePasswordVisibility} 
          style={{backgroundColor:'#C4C4C44D', height: 54,justifyContent:'center', paddingEnd:15}}>
            <Icon
              name={isPasswordVisible ? 'eye' : 'eye-slash'}
              size={30}
              color="black"/>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          flex: 1.5,
          alignItems: 'center',
          justifyContent: 'end',
          width:screenWidth,
        }}>
        <TouchableOpacity style={styles.buttonStyle}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flex: 1.5,
          alignItems: 'center',
          justifyContent: 'space-evenly',
        }}>
        <Text style={styles.paragraph}>
          When you agree to terms and conditions
        </Text>
        <Text style={{color: '#5D25FA'}}
          onPress={() => Linking.openURL('http://google.com')}>
          For got your password?
        </Text>
        <Text style={styles.paragraph}>
          Or login with
        </Text>
      </View>
      <View
        style={{
          flex: 2,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          width:screenWidth,
        }}>
        <View style={[styles.viewicons, {backgroundColor:'#275A8D'}]}>
          <TouchableOpacity>
            <Icon name="facebook-f" color="#D8DFEE" size={30}/>
          </TouchableOpacity>
        </View>
        <View style={[styles.viewicons, {backgroundColor:'#1593C5'}]}>
          <TouchableOpacity>
            <Text style={{fontSize:40, color:'#D8DFEE', fontWeight:700}} >Z</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.viewicons,{borderWidth:1, borderColor:'#0E88D3'}]}>
          <TouchableOpacity>
            <Image source={require('./assets/icogoogle.png')}/>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  paragraph: {
    textAlign: 'center',
    fontSize: 14,
  },
  buttonStyle: {
    width: 320,
    height: 45,
    backgroundColor: '#E53935',
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
    width: 315, 
    backgroundColor:'#C4C4C44D', 
    fontSize: 18,
    paddingHorizontal: 15
  },
  viewicons:{
    width: 300/3,
    height:45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:3
  }
});

export default lab03_1d;
