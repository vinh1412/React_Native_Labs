import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  TouchableOpacity,
  FlatList,
  TextInput,
  ScrollView,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigate } from 'react-router-dom';
const Screen = () => {
  const createPostAPI = 'https://6703ec13ab8a8f892732352d.mockapi.io/api/users';
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState(null);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const fetchUsers = async () => {
    const response = await fetch(createPostAPI);
    const data = await response.json();
    setUsers(data);
  };

  //render data
  useEffect(() => {
    fetchUsers();
  }, []);
  // add user
  const addUser = async () => {
    if (!name || !email || !age) return;
    await fetch(createPostAPI, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, age }),
    });
    reset();
    fetchUsers();
  };

  const getUser = (selectedUser) => {
    setUser(selectedUser);
    setName(selectedUser.name);
    setEmail(selectedUser.email);
    setAge(selectedUser.age);
  };
  // edit user
  const editUser = async () => {
    if (!name || !email || !age) return;
    await fetch(`${createPostAPI}/${user.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, age }),
    });
    reset();
    fetchUsers();
  };

  // edit user
  const deleteUser = async (id) => {
    await fetch(`${createPostAPI}/${id}`, {
      method: 'DELETE',
    });
    fetchUsers();
  };

  const reset = () => {
    setUser(null);
    setName('');
    setAge('');
    setEmail('');
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ height: 100, width: '100%', alignItems: 'center' }}>
        <TextInput
          value={name}
          onChangeText={setName}
          placeholder="Name"
          style={{ width: '80%', height: 30, borderWidth: 1 }}
        />
        <TextInput
          value={email}
          onChangeText={setEmail}
          placeholder="Email"
          style={{ width: '80%', height: 30, borderWidth: 1 }}
        />
        <TextInput
          value={age}
          onChangeText={setAge}
          placeholder="Age"
          style={{ width: '80%', height: 30, borderWidth: 1 }}
        />
      </View>
      <View
        style={{
          justifyContent: 'space-around',
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <TouchableOpacity
          onPress={addUser}
          style={{
            width: 88,
            height: 38,
            backgroundColor: '#F31111',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{ color: '#FFF' }}>Add</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={reset}
          style={{
            width: 88,
            height: 38,
            backgroundColor: '#F31111',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{ color: '#FFF' }}>Reset</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={users}
        renderItem={({ item }) => (
          <View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingVertical: 10,
              }}>
              <TouchableOpacity
                onPress={() => getUser(item)}
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Text style={{ paddingHorizontal: 10 }}>Name: {item.name}</Text>
                <Text style={{ paddingHorizontal: 10 }}>
                  Email: {item.email}
                </Text>
                <Text>Age: {item.age}</Text>
              </TouchableOpacity>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  paddingHorizontal: 10,
                }}>
                <TouchableOpacity
                  onPress={editUser}
                  style={{
                    width: 50,
                    height: 38,
                    backgroundColor: '#F31111',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text style={{ color: '#FFF' }}>Edit</Text>
                </TouchableOpacity>
              </View>
              <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <TouchableOpacity
                  onPress={() => deleteUser(item.id)}
                  style={{
                    width: 50,
                    height: 38,
                    backgroundColor: '#F31111',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text style={{ color: '#FFF' }}>Delete</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};
const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Screen} />
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
