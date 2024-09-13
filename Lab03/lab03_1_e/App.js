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
import { RadioButton } from 'react-native-paper';
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const lab03_1d = () => {
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };
  const [checked, setChecked] = React.useState('first');
  return (
    <View
      style={{
        flex: 1,
        backgroundColor:'#31AA5230'
      }}>
      <View
        style={{
          flex: 2,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{fontSize: 25, fontWeight:700, textTransform: 'uppercase'}}>Register</Text>
      </View>
      <View
        style={{
          flex: 10,
          alignItems: 'center',
          justifyContent: 'space-around',
        }}>
        <TextInput style={styles.textInput} placeholder='Name'/>
        <TextInput style={styles.textInput} placeholder='Phone'/>
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
        <TextInput style={styles.textInput} placeholder='Birthday'/>
        <View style={{
          flexDirection:'row',
          width: 315,
          alignItems:'center',
          justifyContent:'flex-start',
          paddingHorizontal:10,
          flex:0.5
        }}>
        <RadioButton
        value="first"
        status={ checked === 'first' ? 'checked' : 'unchecked' } 
        onPress={() => setChecked('first')}
        />
        <Text style={{fontSize:18, paddingLeft:5, paddingRight:30}}>Male</Text>
        <RadioButton
        value="second"
        status={ checked === 'second' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('second')}
        />
        <Text style={{fontSize:18, paddingLeft:5}}>Female</Text>
        </View>
      </View>
      <View
        style={{
          flex: 1.3,
          alignItems: 'center',
          justifyContent: 'center',
          width:screenWidth,
        }}>
        <TouchableOpacity style={styles.buttonStyle}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flex: 2,
          alignItems: 'center',
          justifyContent: 'flex-start',
        }}>
        <Text style={[styles.paragraph,{paddingTop:10}]}>
          When you agree to terms and conditions
        </Text>
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
});

export default lab03_1d;
