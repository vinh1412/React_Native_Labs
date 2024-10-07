import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  Button,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const DATA = [
  {
    id: 1,
    img: require('./assets/ca_nau_lau.png'),
    name: 'Ca nấu lẩu, nấu mì mini',
    shopName: 'Devang',
    buttonChat: 'Chat',
  },
  {
    id: 2,
    img: require('./assets/ga_bo_toi.png'),
    name: '1KG GÀ BƠ TỎI',
    shopName: 'LTD Food',
    buttonChat: 'Chat',
  },
  {
    id: 3,
    img: require('./assets/xa_can_cau.png'),
    name: 'Xe cần cẩu đa năng',
    shopName: 'Thế giới đồ chơi',
    buttonChat: 'Chat',
  },
  {
    id: 4,
    img: require('./assets/do_choi_dang_mo_hinh.png'),
    name: 'Đồ chơi dạng mô hình',
    shopName: 'Thế giới đồ chơi',
    buttonChat: 'Chat',
  },
  {
    id: 5,
    img: require('./assets/lanh_dao_gian_don.png'),
    name: 'Lãnh đạo giản đơn',
    shopName: 'Minh Long Book',
    buttonChat: 'Chat',
  },
  {
    id: 6,
    img: require('./assets/hieu_long_con_tre.png'),
    name: 'Hiếu lòng con trẻ',
    shopName: 'Minh Long Book',
    buttonChat: 'Chat',
  },
];

const Item = ({ img, name, shopName, buttonChat, id }) => (
  <View style={{ flex: 1 }}>
    <View
      style={{
        backgroundColor: id === 1 ? '#fff' : '#e5e5e5',
        marginVertical: 1,
        flexDirection: 'row',
        height: 80,
        borderColor: '#c4c4c4',
        borderTopWidth: 1,
        borderBottomWidth: 1,
      }}>
      <Image style={{ width: 74, height: 74 }} source={img}></Image>
      <View
        style={{
          width: screenWidth / 2,
          justifyContent: 'space-evenly',
          paddingLeft: 20,
        }}>
        <Text>{name}</Text>
        <Text style={{ color: '#7D5B5B' }}>
          Shop<Text style={{ color: '#000' }}> {shopName}</Text>
        </Text>
      </View>
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity
          style={{
            width: 88,
            height: 38,
            backgroundColor: '#F31111',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{ color: '#FFF' }}>{buttonChat}</Text>
        </TouchableOpacity>
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
            GO TO SCREEN CHAT
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
        <View
          style={{
            height: 75,
            backgroundColor: '#e5e5e5',
            paddingTop:20, paddingBottom:20, paddingLeft:40, paddingRight:40
          }}>
          <Text style={{flexShrink: 1}}>
            Bạn có thắc mắc với sản phẩm vừa xem đừng ngại chát với shop!
          </Text>
        </View>
        <FlatList
          data={DATA}
          renderItem={({ item }) => (
            <Item
              img={item.img}
              name={item.name}
              shopName={item.shopName}
              buttonChat={item.buttonChat}
              id={item.id}
            />
          )}
          keyExtractor={(item) => item.id}
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
        <Stack.Screen name="Home" component={ScreenHome} />
        <Stack.Screen
          name="Chat"
          component={ScreenChat}
          options={{
            headerStyle: {
              backgroundColor: '#1BA9FF', // Đổi màu nền cho thanh navigation
            },
            headerTitleAlign:'center',
            headerTintColor: '#fff', // Đổi màu chữ
            headerRight: () => (
              <TouchableOpacity
                onPress={() => navigation.navigate('Chat')}
                style={{paddingRight: 20}}>
                <Image source={require('./assets/bi_cart-check.png')} />
              </TouchableOpacity>
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
});

export default App;
