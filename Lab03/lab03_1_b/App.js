import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image,
  TextInput
} from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const lab03_1b = () => {
  return (
    <LinearGradient
        colors={['#C7F4F6','#D1F4F6','#E5F4F5','#37D6F8', '#00CCF9']}
        locations={[0, 0.3, 0.85, 1]}
        style={styles.background} >
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <View
        style={{
          flex: 2,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image 
          source={require('./assets/Lock.png')} 
          style={{height: 117, width:105}} />
      </View>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          width: 189,
          height: 58,
        }}>
        <Text style={styles.paragraph}>
          Forget {"\n"} Password
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          width: 302,
          height: 36,
        }}>
        <Text style={styles.paragraphUnder}>
          Provide your account's email for which you want to reset your password
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          width:screenWidth,
        }}>
        <Image 
          source={require('./assets/Mail.png')} 
          style={{height: 45, width:45}}
        />
        <TextInput 
          style={{height: 45, width:257, backgroundColor:'#C4C4C4', fontSize: 15}} placeholder='Email'
        />
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          width:screenWidth,
        }}>
        <TouchableOpacity style={styles.buttonStyle}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flex: 1,
          alignItems:'center',
          justifyContent:'flex-start',
          width:screenWidth,
        }}>
      </View>
    </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  paragraph: {
    textAlign: 'center',
    fontWeight: 700,
    fontSize: 22,
    lineHeight: 29.3,
    textTransform:'uppercase'
  },
  paragraphUnder: {
    textAlign: 'center',
    fontWeight: 700,
    fontSize: 14,
    lineHeight: 17.58,
  },
  buttonStyle: {
    width: 305,
    height: 45,
    backgroundColor: '#E3C000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 700,
    textTransform:'uppercase'
  },
  background: {
    position: 'absolute',
    width:screenWidth,
    height: screenHeight,
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default lab03_1b;
