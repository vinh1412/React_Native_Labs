import {
  Text,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, { useState, useEffect, useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
import { CheckBox } from 'react-native-elements';
const createTodosApi = 'https://6703ec13ab8a8f892732352d.mockapi.io/api/todos';
const API_Screen_01 = ({ navigation }) => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState(null);
  const [name, setName] = useState('name1');

  const fetchTodos = async () => {
    const response = await fetch(createTodosApi);
    const data = await response.json();
    setUsers(data);
  };

  useEffect(() => {
    fetchTodos();
  });

  const checkUser = () => {
    if (!name) {
      Alert.alert('Error', 'Please enter a name');
      return;
    }
    const foundUser = users.find(
      (user) => user.name.toLowerCase() === name.toLowerCase()
    );
    if (foundUser) {
      setUser(foundUser);
      setName('');
      // Điều hướng đến màn hình TodoList với dữ liệu của người dùng
      navigation.navigate('API_Screen_02', { user: foundUser });
    } else {
      Alert.alert('Error', 'User not found');
    }
  };
  return (
    <SafeAreaView
      style={{ flex: 1, alignItems: 'center', backgroundColor: '#FFF' }}>
      <View
        style={{ height: screenHeight / 1.7, justifyContent: 'space-evenly' }}>
        <Image
          source={require('./assets/Image.png')}
          style={{ marginTop: 20 }}
        />
        <Text
          style={{
            fontSize: 24,
            fontWeight: 700,
            color: '#8353E2',
            textAlign: 'center',
          }}>
          MANAGE YOUR {'\n'}TASK
        </Text>
      </View>
      <View style={{ height: screenHeight / 6, justifyContent: 'center' }}>
        <View
          style={{
            borderWidth: 1,
            width: 314,
            height: 43,
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 10,
            borderRadius: 12,
          }}>
          <Image source={require('./assets/mail.png')} />
          <TextInput
            style={{ width: 334, height: 43, paddingHorizontal: 10 }}
            placeholder="Enter your name"
            placeholderTextColor="#BCC1CA"
            value={name}
            onChangeText={setName}
          />
        </View>
      </View>
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <TouchableOpacity
          onPress={checkUser}
          style={{
            width: 190,
            height: 44,
            backgroundColor: '#00BDD6',
            borderRadius: 12,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{ color: '#FFFFFF' }}>GET STARTED -></Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const API_Screen_02 = ({ route, navigation }) => {
  const { user } = route.params;
  const [todos, setTodos] = useState(user.todos);
  useEffect(() => {
    if (route.params?.user?.todos) {
      setTodos(route.params.user.todos); // Nếu có danh sách todos mới, cập nhật lại state
    }
  }, [route.params?.user?.todos]);
  return (
    <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>
      <View style={{ alignItems: 'center' }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            borderWidth: 1,
            width: screenWidth - 50,
            borderColor: '#9095A0',
            borderRadius: 4,
            marginTop: 30,
            marginBottom: 50,
          }}>
          <Image
            source={require('./assets/search.png')}
            style={{ marginHorizontal: 10 }}
          />
          <TextInput
            style={{ width: 334, height: 44, paddingHorizontal: 10 }}
            placeholder="Search"
          />
        </View>
      </View>
      {/**Renders */}
      <FlatList
        data={todos}
        renderItem={({ item }) => {
          const handleToggleCompleted = (todo_id) => {
            const updatedTodos = todos.map((todo) =>
              todo.todo_id === todo_id
                ? // ...todo: tạo 1 đối tượng todo mới bằng cách sao chép các thuộc tính từ todo cũ
                  { ...todo, completed: !todo.completed }
                : todo
            );
            // Cập nhật state
            setTodos(updatedTodos);
          };

          const handleTitleChange = (todo_id, newTitle) => {
            // Cập nhật danh sách todos
            const updatedTodos = todos.map((todo) =>
              todo.todo_id === todo_id ? { ...todo, title: newTitle } : todo
            );
            // Cập nhật state
            setTodos(updatedTodos);
          };
          // Hàm xử lý khi nhấn vào nút Edit
          const handleEdit = async (todo_id, newTitle, newCompleted) => {
            // Tìm và cập nhật todo trong danh sách todos
            const updatedTodos = todos.map((todo) =>
              todo.todo_id === todo_id
                ? { ...todo, title: newTitle, completed: newCompleted }
                : todo
            );
            // Gọi API để cập nhật danh sách todos trên server
            await fetch(`${createTodosApi}/${user.id}`, {
              method: 'PUT',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ todos: updatedTodos }), // Gửi toàn bộ danh sách todos đã cập nhật
            });
            // Cập nhật state với danh sách todos mới sau khi đã cập nhật
            setTodos(updatedTodos);
          };

          const handleDelete = async (todo_id) => {
            // await fetch(
            //   `${createTodosApi}/${user.id}/todos/${todo_id}`,
            //   {
            //     method: 'DELETE',
            //     headers: { 'Content-Type': 'application/json' },
            //   }
            // );
            const deleteTodos = todos.filter(
              (todo) => todo.todo_id !== todo_id
            );
            await fetch(`${createTodosApi}/${user.id}`, {
              method: 'PUT',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ todos: deleteTodos }), // Gửi toàn bộ danh sách todos đã cập nhật
            });
            setTodos(deleteTodos);
          };
          return (
            <View style={{ alignItems: 'center' }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  backgroundColor: '#DEE1E678',
                  borderRadius: 24,
                  marginVertical: 10,
                  width: screenWidth - 30,
                  justifyContent: 'space-between',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <CheckBox
                    size={24}
                    checked={item.completed}
                    checkedColor="green"
                    onPress={() => handleToggleCompleted(item.todo_id)}
                  />
                  <TextInput
                    value={item.title}
                    onChangeText={(text) =>
                      handleTitleChange(item.todo_id, text)
                    }
                    style={{ fontSize: 16, fontWeight: 700, width: 150 }}
                  />
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <TouchableOpacity
                    onPress={() =>
                      handleEdit(item.todo_id, item.title, item.completed)
                    }>
                    <Image
                      source={require('./assets/edit.png')}
                      style={{ width: 24, height: 24, color: 'red' }}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => handleDelete(item.todo_id)}>
                    <Image
                      source={require('./assets/delete.png')}
                      style={{ width: 24, height: 24, color: 'red' }}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          );
        }}
        keyExtractor={(item) => item.todo_id}
      />
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('API_Screen_03', { user: user })}
          style={{ paddingBottom: 70 }}>
          <Image
            source={require('./assets/buttonAdd.png')}
            style={{ width: 69, height: 69, color: 'red' }}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const API_Screen_03 = ({ route, navigation }) => {
  const { user } = route.params;
  const [todos, setTodos] = useState(user.todos);
  const [newTodoTitle, setNewTodoTitle] = useState('');
  const handleAdd = async () => {
    const newTodo = {
      todo_id: todos.length + 1,
      title: newTodoTitle,
      completed: false,
    };
    const updatedTodos = [...todos, newTodo];
    setTodos(updatedTodos);
    await fetch(
      `https://6703ec13ab8a8f892732352d.mockapi.io/api/todos/${user.id}`,
      {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ todos: updatedTodos }),
      }
    );
    navigation.navigate('API_Screen_02', {
      user: { ...user, todos: updatedTodos },
    });
  };
  return (
    <SafeAreaView style={{ flex: 1 , backgroundColor:'#FFF'}}>
      <View
        style={{
          justifyContent: 'space-around',
          alignItems: 'center',
          flex: 1,
        }}>
        <Text
          style={{
            fontSize: 32,
            fontWeight: 700,
            textAlign: 'center',
            marginTop: 30,
            marginBottom: 30,
          }}>
          ADD YOUR JOB
        </Text>
        <View
          style={{
            borderWidth: 1,
            width: 314,
            height: 43,
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 10,
            borderRadius: 5,
            borderColor: '#9095A0',
          }}>
          <Image source={require('./assets/iconInputAdd.png')} />
          <TextInput
            value={newTodoTitle}
            onChangeText={setNewTodoTitle}
            style={{ width: 334, height: 43, paddingHorizontal: 10 }}
            placeholder="input your job"
          />
        </View>
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <TouchableOpacity
            onPress={handleAdd}
            style={{
              width: 190,
              height: 44,
              backgroundColor: '#00BDD6',
              borderRadius: 12,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{ color: '#FFFFFF' }}>FINISH -></Text>
          </TouchableOpacity>
        </View>
        <Image
          source={require('./assets/Image.png')}
          style={{ width: 190, height: 170, marginBottom: 50 }}
        />
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
          name="API_Screen_01"
          component={API_Screen_01}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="API_Screen_02"
          component={API_Screen_02}
          options={({ route }) => ({
            headerStyle: {
              borderBottomWidth: 0, // Xóa border
            },
            title:null,
            headerRight: () => (
              <View
                style={{
                  flexDirection: 'row',
                  paddingHorizontal:10
                }}>
                <Image source={require('./assets/user.png')} />
                <View>
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: 700,
                      paddingHorizontal:10
                    }}>
                    Hi {route.params.user.name}
                  </Text>
                  <Text
                    style={{ fontSize: 14, fontWeight: 700, color: '#9095A0' }}>
                    Have agrate day a head
                  </Text>
                </View>
              </View>
            ),
          })}
        />
        <Stack.Screen
          name="API_Screen_03"
          component={API_Screen_03}
          options={({ route, navigation }) => ({
            headerStyle: {
              borderBottomWidth: 0, // Xóa border
            },
            title:null,
            headerLeft: () => null,
            headerRight: () => (
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={{ marginRight: 20 }}>
                <Image
                  source={require('./assets/iconArrowLeft.png')}
                  style={{ width: 25, height: 25 }}
                />
              </TouchableOpacity>
            ),
            headerTitle: () => (
              <View
                style={{
                  flexDirection: 'row',
                }}>
                <Image source={require('./assets/user.png')} />
                <View>
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: 700,
                      paddingHorizontal: 10,
                    }}>
                    Hi {route.params.user.name}
                  </Text>
                  <Text
                    style={{ fontSize: 14, fontWeight: 700, color: '#9095A0' }}>
                    Have agrate day a head
                  </Text>
                </View>
              </View>
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
