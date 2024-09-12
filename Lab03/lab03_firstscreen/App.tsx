import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
const YourApp = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#00CCF9',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <View
        style={{
          flex: 2,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#00CCF9',
        }}>
        <View style={style.circleShape} />
      </View>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          width: 189,
          height: 58,
        }}>
        <Text style={style.paragraph}>
          GROW {"\n"} YOUR BUSINESS
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
        <Text style={style.paragraphUnder}>
          We will help you to grow your business using online server
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
          width:'100%',
        }}>
        <TouchableOpacity style={style.buttonStyle}>
          <Text style={style.buttonText}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.buttonStyle}>
          <Text style={style.buttonText}>SIGN UP</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  // Tạo hành tròn
  circleShape: {
    width: 140,
    height: 140,
    borderRadius: 140 / 2,
    borderColor: 'black',
    borderWidth: 15,
  },
  paragraph: {
    textAlign: 'center',
    fontWeight: 700,
    fontSize: 22,
    lineHeight: 29.3,
  },
  paragraphUnder: {
    textAlign: 'center',
    fontWeight: 700,
    fontSize: 14,
    lineHeight: 17.58,
  },
  buttonStyle: {
    width: 119,
    height: 48,
    borderRadius: 10,
    backgroundColor: '#E3C000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 700,
  },
});

export default YourApp;
