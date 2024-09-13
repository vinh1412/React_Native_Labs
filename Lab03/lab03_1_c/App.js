import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  TextInput
} from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const lab03_1c = () => {
  return (
    <LinearGradient
        colors={['#C7F4F6','#D1F4F6','#E5F4F5','#37D6F8', '#00CCF9']}
        locations={[0, 0.3, 0.85, 1]}
        style={styles.background}
      >
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
        <Text style={{fontSize: 60, fontWeight:700, textTransform: 'uppercase'}}>Code</Text>
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
          Verification
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
          Enter ontime password sent on ++849092605798
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
        <TextInput style={styles.textInput} />
        <TextInput style={styles.textInput} />
        <TextInput style={styles.textInput} />
        <TextInput style={styles.textInput} />
        <TextInput style={styles.textInput} />
        <TextInput style={styles.textInput} />
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
          <Text style={styles.buttonText}>Verify Code</Text>
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
    fontSize: 20,
    textTransform: 'uppercase'
  },
  paragraphUnder: {
    textAlign: 'center',
    fontWeight: 700,
    fontSize: 14,
    lineHeight: 17.58,
  },
  buttonStyle: {
    width: 320,
    height: 45,
    backgroundColor: '#E3C000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 700,
    textTransform: 'uppercase'
  },
  background: {
    position: 'absolute',
    width:screenWidth,
    height: screenHeight,
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput:{
    height: 50, 
    width:50, 
    borderLeftWidth:1,
    borderTopWidth:1,
    borderBottomWidth:1,
    borderRightWidth:1
  }
});

export default lab03_1c;
