import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  TextInput,
  Dimensions,
  ScrollView
} from 'react-native';
import { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
// You can import supported modules from npm
const Screen01 = ({ navigation }) => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState('Loyal_Funk@gmail.com');
  const [password, setPassword] = useState('OHAIqSbSUT8Y606');
  const urlApiUsers = 'https://6711cec24eca2acdb5f5d0cb.mockapi.io/api/users';
  const createApi = async () => {
    const response = await fetch(urlApiUsers);
    const data = await response.json();
    setUsers(data);
  };
  useEffect(() => {
    createApi();
  }, []);
  const checkUser = () => {
    const findUser = users.find(
      (user) => user.email === email && user.password === password
    );
    if (findUser) {
      setUser(findUser);
      navigation.navigate('Electronics', { user: findUser });
    }
  };
  return (
    <View style={{ flex: 1, backgroundColor: '#FFF', alignItems: 'center' }}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          height: screenHeight / 2.5,
        }}>
        <Image source={require('./assets/icon.png')} />
        <Text style={{ fontSize: 25, fontWeight: 700 }}>Hello Again!</Text>
        <Text style={{ color: 'gray' }}>Log into your account</Text>
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          height: screenHeight / 11,
        }}>
        <View
          style={{
            flexDirection: 'row',
            borderWidth: 1,
            borderRadius: 10,
            width: screenWidth - 30,
            height: screenHeight / 14,
            alignItems: 'center',
          }}>
          <Image
            source={require('./assets/Vector.png')}
            style={{ marginHorizontal: 10 }}
          />
          <TextInput
            value={email}
            onChangeText={setEmail}
            placeholder="Enter your email address"
            placeholderTextColor="gray"
            style={{
              width: screenWidth - 90,
              height: screenHeight / 17,
            }}></TextInput>
        </View>
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          height: screenHeight / 11,
        }}>
        <View
          style={{
            flexDirection: 'row',
            borderWidth: 1,
            borderRadius: 10,
            width: screenWidth - 30,
            height: screenHeight / 14,
            alignItems: 'center',
          }}>
          <Image
            source={require('./assets/lock.png')}
            style={{ marginHorizontal: 10 }}
          />
          <TextInput
            value={password}
            onChangeText={setPassword}
            placeholder="Enter your password"
            placeholderTextColor="gray"
            style={{
              width: screenWidth - 120,
              height: screenHeight / 17,
            }}></TextInput>
          <Image source={require('./assets/eye.png')} />
        </View>
      </View>
      <View
        style={{
          width: screenWidth - 30,
          alignItems: 'flex-end',
          height: 50,
          justifyContent: 'center',
        }}>
        <Text style={{ color: '#00bdd6', fontSize: 15 }}>Forgot password?</Text>
      </View>
      <View style={{ height: 110 }}>
        <TouchableOpacity
          onPress={checkUser}
          style={{
            width: screenWidth - 30,
            height: screenHeight / 15,
            backgroundColor: '#00bdd6',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10,
          }}>
          <Text style={{ color: '#FFF', fontSize: 15 }}>Continue</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          height: 90,
        }}>
        <View
          style={{
            height: 1,
            backgroundColor: 'gray',
            width: screenWidth / 2 - 40,
          }}></View>
        <Text style={{ color: 'gray', paddingHorizontal: 10 }}>or</Text>
        <View
          style={{
            height: 1,
            backgroundColor: 'gray',
            width: screenWidth / 2 - 40,
          }}></View>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Image
          source={require('./assets/google.png')}
          style={{ marginHorizontal: 5 }}
        />
        <Image
          source={require('./assets/face.png')}
          style={{ marginHorizontal: 5 }}
        />
        <Image
          source={require('./assets/apple.png')}
          style={{ marginHorizontal: 5 }}
        />
      </View>
    </View>
  );
};
const apiSales = 'https://6703ec13ab8a8f892732352d.mockapi.io/api/saleDevice';
const HomeScreen = () => {
  // const [selectedItemCategories, setSelectedItemCategories] = useState(1);
  // const [selectedItemsSale, setSelectedItemsSale] = useState(1);
  const [sales, setSales] = useState([]);
  const [selectedSeeAll, setSelectedSeeAll] = useState(false);
  const [selectedType, setSelectedType] = useState('SmartPhone');
  const [selectedSale, setSelectedSale] = useState('Best');
  const itemsCategories = [
    {
      id: 1,
      image: require('./assets/smart.png'),
      bgColor: '#DBCAF6',
      name: 'Phone',
      type: 'Phone',
    },
    {
      id: 2,
      image: require('./assets/ipad.png'),
      bgColor: '#C5D1F7',
      name: 'Ipad',
      type: 'Ipad',
    },
    {
      id: 3,
      image: require('./assets/macbook.png'),
      bgColor: '#F8D8BF',
      name: 'Laptop',
      type: 'Laptop',
    },
  ];
  const itemsSale = [
    { id: 1, text: 'Best Sales', sale: 'Best' },
    { id: 2, text: 'Best Matched', sale: 'Matched' },
    { id: 3, text: 'Popular', sale: 'Popular' },
  ];
  const createApiSales = async () => {
    const response = await fetch(
      `${apiSales}?type=${selectedType}&sale=${selectedSale}`
    );
    const data = await response.json();
    setSales(data);
  };
  useEffect(() => {
    createApiSales();
  }, [selectedType, selectedSale]);

  const toggleSeeAll = () => {
    setSelectedSeeAll((prevState) => !prevState);
  };
  // Xác định số lượng sản phẩm cần hiển thị
  const displayedProducts = selectedSeeAll ? sales : sales.slice(0, 4);
  return (
    <View style={{ backgroundColor: '#FFF', flex: 1 }}>
      <View
        style={{
          height: 50,
          justifyContent: 'space-between',
          width: screenWidth,
          paddingLeft: 10,
          paddingRight: 10,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <View
          style={{
            backgroundColor: '#F3F4F6',
            width: screenWidth - 80,
            height: 50,
            alignItems: 'center',
            flexDirection: 'row',
            borderRadius: 10,
          }}>
          <Image
            source={require('./assets/search.png')}
            style={{ marginHorizontal: 10 }}
          />
          <TextInput
            placeholder="Search"
            placeholderTextColor="#D2D3D8"
            style={{ fontSize: 20, height: 30 }}
          />
        </View>
        <View
          style={{
            backgroundColor: '#F3F4F6',
            height: 50,
            width: 50,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 5,
          }}>
          <Image
            source={require('./assets/search.png')}
            style={{ marginHorizontal: 10 }}
          />
        </View>
      </View>
      <View
        style={{
          width: screenWidth,
          paddingRight: 15,
          paddingLeft: 10,
          justifyContent: 'space-between',
          flexDirection: 'row',
          height: 50,
        }}>
        <Text style={{ fontSize: 20, fontWeight: 700 }}>Categories</Text>
        <TouchableOpacity>
          <Text style={{ color: 'gray' }}>See all ></Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          height: 90,
        }}>
        {itemsCategories.map((item) => (
          <TouchableOpacity
            key={item.id}
            onPress={() => setSelectedType(item.type)}>
            <View
              style={{
                width: 70,
                height: 70,
                backgroundColor: item.bgColor,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 10,
                borderWidth: setSelectedType === item.type ? 2 : 0,
                borderColor:
                  setSelectedType === item.type ? 'purple' : 'transparent',
              }}>
              <Image source={item.image} />
            </View>
          </TouchableOpacity>
        ))}
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
        {itemsSale.map((item) => (
          <TouchableOpacity
            key={item.id}
            onPress={() => setSelectedSale(item.sale)}>
            <View
              style={{
                width: 100,
                height: 20,
                backgroundColor: selectedSale == item.sale ? '#ECFBFF' : '#FFF',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 10,
                borderColor:
                  selectedSale === item.sale ? 'purple' : 'transparent',
              }}>
              <Text
                style={{
                  color: selectedSale == item.sale ? '#00BDD6' : 'gray',
                  fontWeight: selectedSale == item.sale ? 700 : 400,
                }}>
                {item.text}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>

      <FlatList
        data={displayedProducts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <View style={{alignItems:'center'}}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  borderWidth: 1,
                  borderColor: 'gray',
                  width: screenWidth - 20,
                  height: 70,
                  marginVertical: 10,
                }}>
                <View>
                  <Image source={require('./assets/1.png')} />
                </View>
                <View style={{width:250, height:60, justifyContent:'space-evenly'}}>
                  <Text style={{ fontSize: 16, fontWeight: 700 }}>
                    {item.name}
                  </Text>
                  <Image source={require('./assets/Rating.png')} />
                </View>
                <View>
                  <Image source={require('./assets/mdi_heart-outline.png')} />
                  <Text style={{ fontSize: 20, fontWeight: 700 }}>
                    ${item.price}
                  </Text>
                </View>
              </View>
            </View>
          );
        }}
      />
      <View style={{ alignItems: 'center', height: screenHeight / 13 }}>
        <TouchableOpacity
          onPress={toggleSeeAll}
          style={{
            paddingTop: 10,
            width: screenWidth - 20,
            height: 40,
            backgroundColor: '#F3F4F6',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10,
          }}>
          <Text style={{ color: '#A2A3A8' }}>
            {selectedSeeAll ? 'See Less' : 'See All'}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ alignItems: 'center' }}>
        <Image
          source={require('./assets/banner.png')}
          style={{ width: screenWidth - 20, borderRadius: 10 }}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          height: 50,
        }}>
        <View
          style={{
            width: 25,
            height: 10,
            borderRadius: 10 / 2,
            backgroundColor: '#00bdd6',
            marginHorizontal: 5,
          }}></View>
        <View
          style={{
            width: 10,
            height: 10,
            borderRadius: 10 / 2,
            backgroundColor: 'gray',
            marginHorizontal: 5,
          }}></View>
        <View
          style={{
            width: 10,
            height: 10,
            borderRadius: 10 / 2,
            backgroundColor: 'gray',
            marginHorizontal: 5,
          }}></View>
        <View
          style={{
            width: 10,
            height: 10,
            borderRadius: 10 / 2,
            backgroundColor: 'gray',
            marginHorizontal: 5,
          }}></View>
      </View>
    </View>
  );
};
const SearchScreen = () => {
  return (
    <View style={{ backgroundColor: '#FFF', flex: 1 }}>
      <Text>SearchScreen</Text>
    </View>
  );
};
const FavoriteScreen = () => {
  return (
    <View style={{ backgroundColor: '#FFF', flex: 1 }}>
      <Text>FavoriteScreen</Text>
    </View>
  );
};
const InboxScreen = () => {
  return (
    <View style={{ backgroundColor: '#FFF', flex: 1 }}>
      <Text>InboxScreen</Text>
    </View>
  );
};
const AccountScreen = () => {
  return (
    <View style={{ backgroundColor: '#FFF', flex: 1 }}>
      <Text>AccountScreen</Text>
    </View>
  );
};
const Tab = createBottomTabNavigator();
function ScreenWithTabs() {
  const badgeCount = 120;
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconSource;

          // Xác định ảnh tương ứng cho mỗi tab
          if (route.name === 'Home') {
            iconSource = require('./assets/clarity_home-solid.png');
          } else if (route.name === 'Search') {
            iconSource = require('./assets/search.png');
          } else if (route.name === 'Favorite') {
            iconSource = require('./assets/mdi_heart-outline.png');
          } else if (route.name === 'Inbox') {
            iconSource = require('./assets/solar_inbox-outline.png');
          } else if (route.name === 'Account') {
            iconSource = require('./assets/codicon_account.png');
          }

          // Trả về component Image và thay đổi màu với tintColor
          return (
            <Image
              source={iconSource}
              style={{
                width: 24,
                height: 24,
                tintColor: focused ? '#00bdd6' : 'gray', // Đổi màu khi tab được chọn
              }}
              resizeMode="contain"
            />
          );
        },
        tabBarActiveTintColor: '#00bdd6',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Favorite"
        component={FavoriteScreen}
        options={{
          headerShown: false,
          tabBarBadge: badgeCount >= 100 ? '99+' : badgeCount,
        }}
      />
      <Tab.Screen
        name="Inbox"
        component={InboxScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}
// or any files within the Snack
const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Screen01"
          color="#000"
          component={Screen01}
          options={() => ({ headerShown: false })}
        />
        <Stack.Screen
          name="Electronics"
          component={ScreenWithTabs}
          options={() => ({
            headerStyle: {
            },
            headerShadowVisible: false,
            headerRight: () => (
              <View
                style={{
                  flexDirection: 'row',
                  paddingHorizontal: 10,
                  alignItems: 'center',
                }}>
                <Image
                  source={require('./assets/eye.png')}
                  style={{ marginHorizontal: 10 }}
                />
                <Image source={require('./assets/codicon_account.png')} />
              </View>
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
