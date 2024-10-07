import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  TextInput,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const DATA = [
  {
    id: 1,
    img: require('./assets/giacchuyen.png'),
    name: 'Cáp chuyển từ Cổng USB sang PS2...',
    price: '69.900 đ',
    discount: '-39%',
    star: 4,
    sold: 15,
  },
  {
    id: 2,
    img: require('./assets/daynguon.png'),
    name: 'Cáp chuyển từ Cổng USB sang PS2...',
    price: '69.900 đ',
    discount: '-39%',
    star: 4,
    sold: 15,
  },
  {
    id: 3,
    img: require('./assets/dauchuyendoipsps2.png'),
    name: 'Cáp chuyển từ Cổng USB sang PS2...',
    price: '69.900 đ',
    discount: '-39%',
    star: 4,
    sold: 15,
  },
  {
    id: 4,
    img: require('./assets/dauchuyendoi.png'),
    name: 'Cáp chuyển từ Cổng USB sang PS2...',
    price: '69.900 đ',
    discount: '-39%',
    star: 4,
    sold: 15,
  },
  {
    id: 5,
    img: require('./assets/carbusbtops2.png'),
    name: 'Cáp chuyển từ Cổng USB sang PS2...',
    price: '69.900 đ',
    discount: '-39%',
    star: 4,
    sold: 15,
  },
  {
    id: 6,
    img: require('./assets/daucam.png'),
    name: 'Cáp chuyển từ Cổng USB sang PS2...',
    price: '69.900 đ',
    discount: '-39%',
    star: 4,
    sold: 15,
  },
];
const activeStar = require('./assets/star-active.png');
const inactiveStar = require('./assets/star-inactive.png');
const renderStars = (rating) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <Image
        key={i}
        style={{ width: 13, height: 13, marginHorizontal: 2 }}
        source={i <= rating ? activeStar : inactiveStar}
      />
    );
  }
  return stars;
};
const Item = ({ img, name, price, discount, sold, star }) => (
  <View style={{ flex: 1 }}>
    <View
      style={{
        backgroundColor: '#e5e5e5',
        height: screenHeight / 4,
        width: screenWidth / 2,
        justifyContent: 'space-around',
        flex: 1,
      }}>
      <View style={{ alignItems: 'center' }}>
        <Image style={{ width: 155, height: 90 }} source={img}></Image>
      </View>
      <View
        style={{
          width: screenWidth / 2,
          justifyContent: 'space-evenly',
          paddingLeft: 20,
        }}>
        <Text>{name}</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View style={{ flexDirection: 'row' }}>{renderStars(star)}</View>
          <Text>({sold})</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ paddingRight: 20, fontWeight: 700, fontSize: 12 }}>
            ({price})
          </Text>
          <Text style={{ color: '#969DAA', fontSize: 12 }}>({discount})</Text>
        </View>
      </View>
    </View>
  </View>
);
const ScreenHome = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View style={{ alignItems: 'center' }}>
        <Text>Home</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('Chat')}
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
            GO TO SCREEN DETAIL
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
const ScreenChat = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ flex: 1 }}>
        <FlatList
          data={DATA}
          renderItem={({ item }) => (
            <Item
              img={item.img}
              name={item.name}
              sold={item.sold}
              price={item.price}
              star={item.star}
              discount={item.discount}
            />
          )}
          keyExtractor={(item) => item.id}
          numColumns={2}
        />
      </ScrollView>
    </SafeAreaView>
  );
};
const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={ScreenHome}></Stack.Screen>
        <Stack.Screen
          name="Chat"
          component={ScreenChat}
          options={{
            headerStyle: {
              backgroundColor: '#1BA9FF', // Đổi màu nền cho thanh navigation
            },
            headerTitleAlign: 'center',
            headerTintColor: '#fff', // Đổi màu chữ
            headerRight: () => (
              <View
                style={{
                  flexDirection: 'row',
                  width: screenWidth / 4,
                  justifyContent: 'space-around',
                  alignItems: 'center',
                }}>
                <TouchableOpacity>
                  <View style={styles.notificationDot} />
                  <Image source={require('./assets/bi_cart-check.png')} />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image source={require('./assets/setting_icon.png')} />
                </TouchableOpacity>
              </View>
            ),
            headerTitle: () => (
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  backgroundColor: '#FFF',
                }}>
                <Image
                  source={require('./assets/search_icon.png')}
                  style={{ width: 24, height: 24, marginLeft: 10 }}
                />
                <TextInput
                  style={{
                    height: 30,
                    paddingHorizontal: 10,
                    backgroundColor: '#fff',
                    width: 192,
                  }}
                  placeholder="Dây cáp usd"
                />
              </View>
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  notificationDot: {
    position: 'absolute',
    right: 0,
    top: 0,
    width: 10,
    height: 10,
    borderRadius: 10 / 2,
    backgroundColor: 'red',
    zIndex: 1,
  },
});

export default App;
