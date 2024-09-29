import * as React from 'react';
import { View, Text, Image, TouchableOpacity, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useEffect, useRef, useState } from 'react';
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
function Screen01(props) {
  const { navigation, route } = props;
  const { navigate, goBack } = navigation;
  const color = route.params ? route.params.color || 'blue' : 'blue';
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          width: screenWidth,
          height: screenHeight / 2,
          justifyContent: 'space-evenly',
          paddingTop: 20,
        }}>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Image
            style={{
              width: 301,
              height: 361,
            }}
            source={
              color === 'silver'
                ? require('./assets/vs_silver.png')
                : color === 'red'
                ? require('./assets/vs_red.png')
                : color === 'black'
                ? require('./assets/vs_black.png')
                : color === 'blue'
                ? require('./assets/vs_blue.png')
                : require('./assets/vs_blue.png')
            }
          />
        </View>
        <Text
          style={{
            fontSize: 17,
            paddingTop: 20,
            paddingLeft: 20,
          }}>
          Điện Thoại Vsmart Joy 3 - Hàng chính hãng
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          height: screenHeight / 19,
          alignItems: 'center',
          paddingLeft: 20,
        }}>
        <View style={{ flexDirection: 'row', paddingRight: 20 }}>
          {[...Array(5)].map((item, index) => (
            <Image key={index} source={require('./assets/star.png')} />
          ))}
        </View>
        <Text style={{ fontSize: 15 }}>(Xem 828 đánh giá)</Text>
      </View>
      <View style={{ flexDirection: 'row', paddingLeft: 20 }}>
        <Text style={{ fontWeight: 700, fontSize: 18 }}>1.790.000 đ</Text>
        <Text style={{ paddingLeft: 60 }}>1.790.000 đ</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          height: 30,
          alignItems: 'center',
          paddingLeft: 20,
        }}>
        <Text
          style={{
            paddingRight: 10,
            fontSize: 12,
            fontWeight: 700,
            color: '#FA0000',
          }}>
          Ở ĐÂU RẺ HƠN HOÀN TIỀN
        </Text>
        <Image style={{}} source={require('./assets/question.png')} />
      </View>
      <View
        style={{
          height: screenHeight / 12,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            borderWidth: 1,
            width: screenWidth - 40,
            height: 43,
            borderRadius: 10,
          }}
          onPress={() => navigate('Screen02')}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              paddingLeft: 80,
            }}>
            <Text>4 MÀU-CHỌN MÀU</Text>
          </View>
          <View
            style={{
              alignItems: 'flex-end',
              paddingLeft: 60,
            }}>
            <Text style={{}}>></Text>
          </View>
        </TouchableOpacity>
      </View>
      <View
        style={{
          justifyContent: 'flex-end',
          alignItems: 'center',
          height: screenHeight / 5,
        }}>
        <TouchableOpacity
          onPress={() => navigate('Screen03', { color: color })}
          style={{
            height: 43,
            width: screenWidth - 40,
            borderRadius: 10,
            backgroundColor: '#EE0A0A',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{ color: 'white', fontSize: 20, fontWeight: 700 }}>
            CHỌN MUA
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

{
  /* Screen02--------------------------------------------------------------------------*/
}
function Screen02(props) {
  const { navigation, route } = props;
  const { navigate, goBack } = navigation;
  const [color, setColor] = useState('blue');
  const [imageSource, setImageSource] = useState(
    require('./assets/vs_blue.png')
  );

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flexDirection: 'row',
          height: screenHeight / 4,
          paddingTop: 10,
          paddingLeft: 15,
        }}>
        <Image
          source={
            color === 'silver'
              ? require('./assets/vs_silver.png')
              : color === 'red'
              ? require('./assets/vs_red.png')
              : color === 'black'
              ? require('./assets/vs_black.png')
              : color === 'blue'
              ? require('./assets/vs_blue.png')
              : require('./assets/vs_blue.png')
          }
          style={{ width: 112, height: 137 }}
        />
        <View
          style={{
            paddingLeft: 20,
            height: screenHeight / 5,
            justifyContent: 'space-around',
          }}>
          <Text style={{}}>Điện Thoại Vsmart Joy 3 {'\n'}Hàng chính hãng</Text>
          <Text style={{ fontSize: 15 }}>
            Màu: <Text style={{ fontWeight: 700 }}>{color}</Text>
          </Text>
          <Text style={{ fontSize: 15 }}>
            Cung cấp bởi <Text style={{ fontWeight: 700 }}>Tiki Tradding</Text>
          </Text>
          <Text style={{ fontSize: 18, fontWeight: 700 }}>1.790.000 đ</Text>
        </View>
      </View>
      <View style={{ backgroundColor: '#C4C4C4', flex: 1 }}>
        <View style={{ height: screenHeight / 18, justifyContent: 'center' }}>
          <Text style={{ fontSize: 18, paddingLeft: 15 }}>
            Chọn một màu bên dưới:
          </Text>
        </View>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'space-between',
            height: screenHeight / 2,
          }}>
          <TouchableOpacity
            onPress={() => {
              setColor('silver');
              setImageSource(require('./assets/vs_silver.png'));
            }}>
            <View
              style={{ width: 85, height: 80, backgroundColor: '#C5F1FB' }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setColor('red');
              setImageSource(require('./assets/vs_red.png'));
            }}>
            <View
              style={{ width: 85, height: 80, backgroundColor: '#F30D0D' }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setColor('black');
              setImageSource(require('./assets/vs_black.png'));
            }}>
            <View
              style={{ width: 85, height: 80, backgroundColor: '#000000' }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setColor('blue');
              setImageSource(require('./assets/vs_blue.png'));
            }}>
            <View
              style={{ width: 85, height: 80, backgroundColor: '#234896' }}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            justifyContent: 'flex-end',
            alignItems: 'center',
            height: screenHeight / 10,
          }}>
          <TouchableOpacity
            onPress={() => navigate('Screen01', { color: color })}
            style={{
              width: screenWidth - 30,
              height: 44,
              backgroundColor: '#1952E294',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 10,
              borderColor: '#CA1536',
              borderWidth: 1,
            }}>
            <Text style={{ fontSize: 20, fontWeight: 700, color: '#F9F2F2' }}>
              XONG
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

{
  /**Screen03------------------------------------------------------------------------ */
}
function Screen03(props) {
  const { navigation, route } = props;
  const { navigate, goBack } = navigation;
  const color = route.params ? route.params.color : 'blue';
  return (
    <View style={{ flex: 1 }}>
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Image
          source={
            color == 'silver'
              ? require('./assets/vs_silver.png')
              : color == 'red'
              ? require('./assets/vs_red.png')
              : color == 'black'
              ? require('./assets/vs_black.png')
              : color == 'blue'
              ? require('./assets/vs_blue.png')
              : require('./assets/vs_blue.png')
          }
        />
      </View>
    </View>
  );
}
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Screen01" component={Screen01} />
        <Stack.Screen name="Screen02" component={Screen02} />
        <Stack.Screen name="Screen03" component={Screen03} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
