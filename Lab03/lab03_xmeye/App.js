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
import Icon from 'react-native-vector-icons/Feather';
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const lab03_1d = () => {
  return (
    <View
      style={{
        flex: 1,        
      }}>
      <View
        style={{
          flex: 3,
          alignItems:'center',
          justifyContent: 'center',
        }}>
        <Image source={require('./assets/eyeball.png')}/>
      </View>
      <View
        style={{
          flex: 2,
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View style={{
          flexDirection:'row',
          borderBottomWidth:1, 
          borderColor:'#C4C4C4', 
          }}>
          <View style={{justifyContent:'center',width:50, height:54}}>
            <Icon
              name={'user'}
              size={40}
              color="#386FFC" />
           </View>
          <TextInput style={[styles.textInput,{width: 250}]} placeholder='Please input user name'/>
        </View>
        <View style={{
          flexDirection:'row',
         borderBottomWidth:1,  
          borderColor:'#C4C4C4',
        }}>
        <View style={{justifyContent:'center',width:50, height:54}}>
          <Icon
              name={'lock'}
              size={40}
              color="#386FFC" />
        </View>
        <TextInput style={[styles.textInput,{width:250}]} 
          placeholder='Please input password' 
          />
        </View>
      </View>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          width:screenWidth,
          justifyContent:'flex-end'
        }}>
        <TouchableOpacity style={styles.buttonStyle}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection:'row',
          alignItems: 'center',
          justifyContent: 'space-around',
        }}>
        <Text style={styles.paragraph}>
         Register
        </Text>
        <Text style={styles.paragraph}>
         Forgot Password
        </Text>
      </View>
      <View style={{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
      }}>
        <View
          style={{
            width: 50,
            borderColor: '#00f',
            height: 1,
            borderTopWidth: 1,
            borderStyle: 'solid',
          }}
        />
        <Text
          style={{
            marginHorizontal: 10,
            color: '#000',
            fontSize: 18,
          }}>
          Other Login Methods
        </Text>
        <View
          style={{
            width:50,
            borderColor: '#00f',
            height: 1,
            borderTopWidth: 1,
            borderStyle: 'solid',
          }}
        />
      </View>
      <View style={{
        flex:2,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around'
      }}>
        <View>
          <Image source={require('./assets/addmem.png')}/>
        </View>
        <View>
          <Image source={require('./assets/wifi.png')}/>
        </View>
        <View
          style={{
            backgroundColor:'#3A579C',
            width:70,
            height:70,
            alignItems:'center',
            justifyContent:'center',
            borderRadius:10
          }}>
          <Image source={require('./assets/fb.png')}/>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  paragraph: {
    textAlign: 'center',
    fontSize: 18,
  },
  buttonStyle: {
    width: 290,
    height: 45,
    backgroundColor: '#386FFC',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  },
  buttonText: {
    fontSize: 20,
    textTransform: 'uppercase',
    color:'#FFF'
  },
  textInput:{
    height: 54,
    fontSize: 18,
    color: '#C4C4C4'
  },
});

export default lab03_1d;
