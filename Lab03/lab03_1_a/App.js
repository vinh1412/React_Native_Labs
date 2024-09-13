import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions
} from 'react-native';
 import { LinearGradient } from "expo-linear-gradient";
 const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const lab03_1a = () => {
  return (
    <LinearGradient
        colors={['#C7F4F6','#D1F4F6','#E5F4F5','#37D6F8', '#00CCF9']}
        locations={[0, 0.3, 0.85, 1]}
        style={{flex:1}} >
    <View
      style={{
        flex: 1,
      }}>
      <View
        style={{
          flex: 2,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View style={styles.circleShape} />
      </View> 
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          height: 58,
        }}>
        <Text style={styles.paragraph}>
          GROW {"\n"} YOUR BUSINESS
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          height: 36,
        }}>
        <Text style={styles.paragraphUnder}>
          We will help you to grow your business using online server
        </Text>
      </View>
      
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
          width:screenWidth,
        }}>
        <TouchableOpacity style={styles.buttonStyle}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonStyle}>
          <Text style={styles.buttonText}>SIGN UP</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flex: 1,
          alignItems:'center',
        }}>
        <Text style={{fontWeight: 700, fontSize: 18,}}>
          HOW WE WORK?
        </Text>
      </View>
    </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
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
    width: 125,
    height: 45,
    backgroundColor: '#E3C000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 700,
  },
});

export default lab03_1a;
