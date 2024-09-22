import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  ScrollView,
  Dimensions
} from 'react-native';
import { CheckBox } from 'react-native-elements';
import { useState } from 'react';
const screenWidth = Dimensions.get('window').width;
const lab04_2c = () => {
  const [isCheckedLower, setIsCheckedLower] = useState(false);
  const [isCheckedUpper, setIsCheckedUpper] = useState(false);
  const [isCheckedNumber, setIsCheckedNumber] = useState(false);
  const [isCheckedSpecial, setIsCheckedSpecial] = useState(false);
  const [passwordLength, setPasswordLength] = useState('');
  const [generatedPassword, setGeneratedPassword] = useState('');

  const generatePassword=(length)=>{
    const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
    const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const specialChars = '!@#$%^&*()-_=+[]{}|;:,.<>?';
    let passWord='';
    let allChar='';

    if(isCheckedLower) allChar+=lowerCase;
    if(isCheckedUpper) allChar+=upperCase;
    if(isCheckedNumber) allChar+=numbers;
    if(isCheckedSpecial) allChar+=specialChars;

    if (allChar.length === 0) {
      alert('Please select at least one option');
      return;
    }
    for(let i=0; i<length;i++){
      passWord+=allChar[Math.floor(Math.random()*allChar.length)]
    }
    setGeneratedPassword(passWord);
  }
  return (
    <SafeAreaView style={{backgroundColor:'#23235B', flex:1}}>
    <ScrollView contentContainerStyle={{flex:1}}>
      {/**View header, output */}
      <View style={{justifyContent:'space-evenly', alignItems: 'center', flex:2, marginTop:20}}>
        <Text style={{fontSize: 30, fontWeight: 700, color:'#FFFFFF'}}>
          PASSWORD {"\n"}GENERATOR
        </Text>
        <TextInput style={{
          width: screenWidth-50, 
          height: 55, 
          backgroundColor:'#151537', 
          color: 'white', 
          fontSize: 20,
          textAlign:'center'}}
          editable={false}
          value={generatedPassword}
          />
      </View>
      {/**View body */}
      <View style={{
        paddingLeft:30, 
        flex:4,
        justifyContent:'space-between',
        
        }}>
        <View style={{
          flexDirection:'row', justifyContent:'space-between', alignItems:'center', paddingRight:30
          }}>
          <Text style={styles.paragraph}>Password length</Text>
          <TextInput style={{
            backgroundColor: '#FFFFFF', 
            width:screenWidth/4, 
            height:33,
            textAlign:'center'}}
            keyboardType='numeric'
            value={passwordLength}
            onChangeText={setPasswordLength}
            />
        </View>
        <View style={{flexDirection:'row', justifyContent:'space-between', alignItems: 'center'}}>
          <Text style={styles.paragraph}>Include lower case letters</Text>
          <CheckBox size={40} checked={isCheckedLower} onPress={() => setIsCheckedLower(!isCheckedLower)}/>
        </View>
        <View style={{flexDirection:'row', justifyContent:'space-between', alignItems: 'center'}}>
          <Text style={styles.paragraph}>Include upcase case letters</Text>
          <CheckBox size={40} checked={isCheckedUpper} onPress={() => setIsCheckedUpper(!isCheckedUpper)}/>
        </View>
        <View style={{flexDirection:'row', justifyContent:'space-between', alignItems: 'center'}}>
          <Text style={styles.paragraph}>Include number</Text>
          <CheckBox size={40} checked={isCheckedNumber} onPress={() => setIsCheckedNumber(!isCheckedNumber)}/>
        </View>
        <View style={{flexDirection:'row', justifyContent:'space-between', alignItems: 'center'}}>
          <Text style={styles.paragraph}>Include special symbol</Text>
          <CheckBox size={40} checked={isCheckedSpecial} onPress={() => setIsCheckedSpecial(!isCheckedSpecial)}/>
        </View>
      </View>
      {/**View button */}
      <View style={{justifyContent:'center', alignItems:'center', flex:1}}>
        <TouchableOpacity style={{
            backgroundColor:'#3B3B98', 
            width:screenWidth-50, 
            height:55, 
            justifyContent: 'center',
            alignItems:'center'
            }}
            onPress={()=>generatePassword(parseInt(passwordLength) ||6)}
            >
          <Text style={{color:'white', fontSize:21, fontWeight:700}}>GENERATE PASSWORD</Text>
        </TouchableOpacity>
      </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles=StyleSheet.create({
  paragraph:{
    fontSize: 24,
    fontWeight: 700,
    color:'#FFFFFF',
    flexShrink:1
  }
})
export default lab04_2c;
