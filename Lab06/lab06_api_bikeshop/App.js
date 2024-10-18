import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// You can import supported modules from npm

const Screen01 = ({ navigation }) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#FFF',
        justifyContent: 'space-evenly',
      }}>
      <View style={{ paddingTop: 40 }}>
        <Text
          style={{
            fontSize: 26,
            fontFamily: 'VT323',
            textAlign: 'center',
            paddingHorizontal: 10,
          }}>
          A premium online store for sporter and their stylish choice
        </Text>
      </View>
      <View
        style={{
          height: 388,
          backgroundColor: '#E941411A',
          marginLeft: 10,
          marginRight: 10,
          borderRadius: 50,
          alignItems: 'center',
          justifyContent: 'space-around',
        }}>
        <Image
          source={require('./assets/bikecycleImage.png')}
          style={{ width: 270, height: 244 }}
        />
      </View>
      <View>
        <Text
          style={{
            fontSize: 26,
            fontFamily: 'Ubuntu',
            textAlign: 'center',
            fontWeight: 700,
          }}>
          POWER BIKE {'\n'} SHOP
        </Text>
      </View>
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Screen02')}
          style={{
            width: 340,
            height: 61,
            backgroundColor: '#E94141',
            borderRadius: 30,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 27,
              fontFamily: 'Ubuntu',
              color: '#FEFEFE',
            }}>
            Get Started
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const bikeCycleApi =
  'https://6711cec24eca2acdb5f5d0cb.mockapi.io/api/bikecycle';
const Screen02 = ({ navigation }) => {
  const [bikeCycles, setBikeCycles] = useState([]); // danh sách data từ api
  const fetchBikeCycleApi = async (type1 = '') => {
    const response = await fetch(`${bikeCycleApi}?type=${type1}`);
    const data = await response.json();
    setBikeCycles(data);
  };
  useEffect(() => {
    fetchBikeCycleApi();
  }, []);
  const imageMapping = {
    'pinarello_blue.png': require('./assets/pinarello_blue.png'),
    'pina_mountain_red.png': require('./assets/pina_mountain_red.png'),
    'pina_bike.png': require('./assets/pina_bike.png'),
    'pinarello_red.png': require('./assets/pinarello_red.png'),
    'pinarello_purple.png': require('./assets/pinarello_purple.png'),
    'pinarello_black.png': require('./assets/pinarello_black.png'),
  };

  // Hàm lọc dựa trên type
  const filterByType = (type) => {
    fetchBikeCycleApi(type);
  };
  const handleEdit = async (bike_id) => {
    const currentBikeCycle = bikeCycles.find((bike) => bike.id === bike_id);
    await fetch(`${bikeCycleApi}/${bike_id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ isFavorite: !currentBikeCycle.isFavorite }),
    });
  // Edit Favorite
    const updatedOriginalBikeCycles = bikeCycles.map((bike) =>
      bike.id === bike_id ? { ...bike, isFavorite: !bike.isFavorite } : bike
    );
    setBikeCycles(updatedOriginalBikeCycles);
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#FFF',
      }}>
      <View style={{ height: 50, justifyContent: 'center' }}>
        <Text
          style={{
            fontSize: 25,
            fontWeight: 700,
            paddingHorizontal: 10,
            color: '#E94141',
          }}>
          The world’s Best Bike
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
          paddingBottom: 10,
        }}>
        <TouchableOpacity
          onPress={() => filterByType('')}
          style={{
            width: 99,
            height: 32,
            borderRadius: 5,
            borderWidth: 1,
            borderColor: '#E9414187',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{ color: '#E94141' }}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => filterByType('Roadbike')}
          style={{
            width: 99,
            height: 32,
            borderRadius: 5,
            borderWidth: 1,
            borderColor: '#E9414187',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{ color: '#BEB6B6' }}>Roadbike</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => filterByType('Mountain')}
          style={{
            width: 99,
            height: 32,
            borderRadius: 5,
            borderWidth: 1,
            borderColor: '#E9414187',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{ color: '#BEB6B6' }}>Mountain</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={bikeCycles}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        renderItem={({ item }) => {
          return (
            <View
              style={{
                alignItems: 'center',
                flex: 1,
              }}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('Screen03', { bikeCycle: item })
                }>
                <View
                  style={{
                    width: 167,
                    height: 200,
                    backgroundColor: '#F7BA8326',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginHorizontal: 5,
                    padding: 10,
                    borderRadius: 10,
                    marginVertical: 10,
                  }}>
                  <View
                    style={{
                      position: 'absolute',
                      left: 0,
                      top: 0,
                      margin: 5,
                      zIndex: 1,
                    }}>
                    <TouchableOpacity onPress={() => handleEdit(item.id)}>
                      <Image
                        source={
                          item.isFavorite
                            ? require('./assets/heart_active.png')
                            : require('./assets/heart_inactive.png')
                        }
                      />
                    </TouchableOpacity>
                  </View>
                  <Image
                    source={require(`./assets/${item.urlImage}`)}
                    style={{ width: 146, height: 137 }}
                  />
                  <Text style={{ fontSize: 20 }}>{item.name}</Text>
                  <Text style={{ fontSize: 25, color: '#F7BA83' }}>
                    $
                    <Text
                      style={{
                        color: '#000',
                        fontWeight: 700,
                      }}>
                      {item.price}
                    </Text>
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
};
const Screen03 = ({ route }) => {
  const { bikeCycle } = route.params;
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#FFF' }}>
      <View
        style={{
          height: 388,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#E941411A',
          margin: 10,
          borderRadius: 10,
        }}>
        <Image
          source={require('./assets/' + bikeCycle.urlImage)}
          style={{ width: 300, height: 300 }}
        />
      </View>
      <View style={{ paddingLeft: 10 }}>
        <Text style={{ fontSize: 35 }}>{bikeCycle.name}</Text>
      </View>
      <View style={{ flexDirection: 'row', paddingLeft: 10 }}>
        <Text style={{ color: '#00000096', fontSize: 25 }}>
          {bikeCycle.discount}% OFF |{' '}
          {bikeCycle.price - (bikeCycle.price * bikeCycle.discount) / 100}$
        </Text>
        <View>
          <Text
            style={{
              fontSize: 25,
              paddingLeft: 30,
              textDecorationLine: 'line-through',
            }}>
            {bikeCycle.price}$
          </Text>
        </View>
      </View>
      <View style={{ paddingLeft: 10 }}>
        <Text style={{ fontSize: 25 }}>Description</Text>
        <Text style={{ fontSize: 22, color: '#00000096' }}>
          {bikeCycle.description}
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          flex: 1,
        }}>
        <Image
          source={
            route.params?.bikeCycle?.isFavorite
              ? require('./assets/heart_active.png')
              : require('./assets/heart_inactive.png')
          }
          style={{ width: 35, height: 35 }}
        />
        <TouchableOpacity
          style={{
            width: 269,
            height: 54,
            backgroundColor: '#E94141',
            borderRadius: 30,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{ fontSize: 25, color: '#FFF' }}>Add to card</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Screen01"
          component={Screen01}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Screen02" component={Screen02} />
        <Stack.Screen name="Screen03" component={Screen03} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
