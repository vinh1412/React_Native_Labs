import {
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
  TextInput,
} from "react-native";
import { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CheckBox } from "react-native-elements";

const createApi = "https://6711cec24eca2acdb5f5d0cb.mockapi.io/api/users";
const Screen01 = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
        padding: 20,
      }}
    >
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          width: "auto",
        }}
      >
        <Image source={require("./assets/Container.png")} />
      </View>
      <View style={{}}>
        <Text style={{ fontSize: 20, fontWeight: 700 }}>
          Boost Productivity
        </Text>
        <Text style={{ fontSize: 16, color: "gray" }}>
          Simplify tasks, boost Productivity
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate("Screen02")}
        style={{
          width: "auto",
          padding: 10,
          backgroundColor: "#25C3D9",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 5,
        }}
      >
        <Text style={{ color: "#FFF" }}>Sign up</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("Screen03")}
        style={{
          width: "auto",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>Login</Text>
      </TouchableOpacity>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          padding: 10,
        }}
      >
        <View
          style={{
            width: 10,
            height: 10,
            borderRadius: 10 / 2,
            borderBlockColor: "#25C3D9",
            borderWidth: 1,
            marginHorizontal: 5,
          }}
        ></View>
        <View
          style={{
            width: 10,
            height: 10,
            borderRadius: 10 / 2,
            backgroundColor: "#25C3D9",
            borderBlockColor: "#25C3D9",
            borderWidth: 1,
            marginHorizontal: 5,
          }}
        ></View>
        <View
          style={{
            width: 10,
            height: 10,
            borderRadius: 10 / 2,
            borderBlockColor: "#25C3D9",
            borderWidth: 1,
            marginHorizontal: 5,
          }}
        ></View>
      </View>
    </View>
  );
};
const Screen02 = ({ navigation }) => {
  const [users, setUsers] = useState([]);
  const readApi = async () => {
    const response = await fetch(createApi);
    const data = await response.json();
    setUsers(data);
  };
  useEffect(() => {
    readApi();
  }, []);
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const addUsers = async () => {
    const response = await fetch(createApi, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });
    const data = await response.json();
    setUsers([...users, data]);
    readApi();
  };
  const signUp = () => {
    if (name === "" || email === "" || password === "") {
      alert("Please fill all fields");
    } else if (users.find((item) => item.email === email)) {
      alert("Email already exists");
    } else {
      addUsers();
      navigation.navigate("Screen03");
    }
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        padding: 20,
      }}
    >
      <View
        style={{ alignItems: "center", justifyContent: "center", padding: 90 }}
      >
        <Image source={require("./assets/Image19.png")} />
        <Text style={{ fontSize: 20, fontWeight: 700 }}>Nice to see you!</Text>
        <Text style={{ fontSize: 16, color: "gray" }}>
          Create your account!
        </Text>
      </View>
      <View style={{ width: "100%" }}>
        <View
          style={{
            flexDirection: "row",
            borderWidth: 1,
            borderRadius: 10,
            alignItems: "center",
            marginVertical: 10,
          }}
        >
          <Image
            source={require("./assets/codicon_account.png")}
            style={{ marginHorizontal: 10, width: 20, height: 20 }}
          />
          <TextInput
            placeholder="Enter your user name"
            placeholderTextColor={"gray"}
            value={name}
            onChangeText={setName}
            style={{ padding: 10, width: "100%" }}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            borderWidth: 1,
            borderRadius: 10,
            alignItems: "center",
            marginVertical: 10,
          }}
        >
          <Image
            source={require("./assets/Vector.png")}
            style={{ marginHorizontal: 10, width: 20, height: 20 }}
          />
          <TextInput
            placeholder="Enter your email address"
            placeholderTextColor={"gray"}
            value={email}
            onChangeText={setEmail}
            style={{ padding: 10, width: "100%" }}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            borderWidth: 1,
            borderRadius: 10,
            alignItems: "center",
            marginVertical: 10,
            justifyContent: "space-around",
          }}
        >
          <Image
            source={require("./assets/lock.png")}
            style={{ marginHorizontal: 10, width: 20, height: 20 }}
          />
          <TextInput
            placeholder="Enter your password"
            placeholderTextColor={"gray"}
            value={password}
            onChangeText={setPassword}
            style={{ padding: 10, width: "100%" }}
            secureTextEntry={!isPasswordVisible}
          />
          <TouchableOpacity onPress={togglePasswordVisibility}>
            <Image
              source={require("./assets/eye.png")}
              style={{ marginHorizontal: 10, width: 20, height: 20 }}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
          marginRight: 35,
        }}
      >
        <CheckBox checked={true} size={20} />
        <Text>
          I agree width <Text>Terms & Conditions</Text>
        </Text>
      </View>
      <TouchableOpacity
        onPress={signUp}
        style={{
          width: "100%",
          padding: 10,
          backgroundColor: "#25C3D9",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 5,
          marginVertical: 10,
        }}
      >
        <Text style={{ color: "#FFF" }}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};
// Screen 03--------------------------------------
const Screen03 = ({ navigation }) => {
  const [users, setUsers] = useState([]);
  const readApi = async () => {
    const response = await fetch(createApi);
    const data = await response.json();
    setUsers(data);
  };
  useEffect(() => {
    readApi();
  });
  const [email, setEmail] = useState("vinh@gmail.com");
  const [password, setPassword] = useState("123");
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };
  const Login = () => {
    // Kiểm tra xem email và password có bị bỏ trống không
    const isEmptyField = email === "" || password === "";

    // Nếu có trường nào bị bỏ trống, thông báo lỗi
    isEmptyField
      ? alert("Please fill all fields")
      : // Nếu không, duyệt qua mảng users để kiểm tra email và password
      users.find((user) => user.email === email && user.password === password)
      ? navigation.navigate("Screen04")
      : alert("Invalid email or password");
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
        padding: 20,
      }}
    >
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Image source={require("./assets/Image20.png")} />
      </View>
      <View style={{ padding: 20 }}>
        <Text style={{ fontSize: 30, fontWeight: 700 }}>Welcome!</Text>
      </View>
      <View style={{ width: "100%" }}>
        <View>
          <Text style={{ fontWeight: 700 }}>Email</Text>
          <View
            style={{
              flexDirection: "row",
              borderRadius: 10,
              alignItems: "center",
              marginVertical: 10,
              backgroundColor: "#F0F1F5",
            }}
          >
            <Image
              source={require("./assets/Vector.png")}
              style={{ marginHorizontal: 10, width: 20, height: 20 }}
            />
            <TextInput
              value={email}
              onChangeText={setEmail}
              placeholder="Enter your email address"
              placeholderTextColor={"gray"}
              style={{ padding: 10, width: "100%" }}
            />
          </View>
        </View>
        <View>
          <Text style={{ fontWeight: 700 }}>Password</Text>
          <View
            style={{
              flexDirection: "row",
              borderRadius: 10,
              alignItems: "center",
              marginVertical: 10,
              justifyContent: "space-around",
              backgroundColor: "#F0F1F5",
            }}
          >
            <Image
              source={require("./assets/lock.png")}
              style={{ marginHorizontal: 10, width: 20, height: 20 }}
            />
            <TextInput
              placeholder="Enter your password"
              value={password}
              onChangeText={setPassword}
              placeholderTextColor={"gray"}
              secureTextEntry={!isPasswordVisible}
              style={{ padding: 10, width: "100%" }}
            />
            <TouchableOpacity onPress={togglePasswordVisibility}>
              <Image
                source={require("./assets/eye.png")}
                style={{ marginHorizontal: 10, width: 20, height: 20 }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={{ flex: 1, justifyContent: "center" }}>
        <TouchableOpacity
          onPress={Login}
          style={{
            width: "100%",
            padding: 10,
            backgroundColor: "#25C3D9",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 50,
            marginVertical: 10,
          }}
        >
          <Text style={{ color: "#FFF" }}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const apiCakes = "https://6714fe1433bc2bfe40b901d3.mockapi.io/api/cakes";
const Screen04 = ({}) => {
  const [cakes, setCakes] = useState([]);
  const [selectedImage, setSelectedImage] = useState("cake1.png");
  const [selectedSize, setSelectedSize] = useState("M"); // Khởi tạo size mặc định
  const availableSizes = ["XL", "S", "M", "L", "XS"];
  const [quantity, setQuantity] = useState(1);
  const [total, setTotal] = useState(1);

  const addQuantity = () => {
    setQuantity((quantity) => quantity + 1);
  };
  const subQuantity = () => {
      setQuantity((quantity) => (quantity > 1 ? quantity - 1 : 1));
  };

  const readCakes = async (image) => {
    const response = await fetch(apiCakes + `?image=${image}`);
    const data = await response.json();
    setCakes(data);
  };
  const onImageClick = (image) => {
    setSelectedImage(image); // Cập nhật hình ảnh đã chọn
    readCakes(image); // Gọi hàm lọc danh sách cakes theo hình ảnh
  };
  useEffect(() => {
    readCakes(selectedImage);
  }, [selectedImage]);
  const imageMapping = {
    "cake1.png": require("./assets/cake1.png"),
    "cake2.png": require("./assets/cake2.png"),
    "cake3.png": require("./assets/cake3.png"),
    "cake4.png": require("./assets/cake4.png"),
  };
  return (
    <View style={styles.container}>
      <View
        style={{
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "yellow",
          height: 100,
        }}
      >
        <Image source={require("./assets/cake1.png")} />
      </View>
      <View
        style={{
          width: "100%",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
          padding: 10,
        }}
      >
        <TouchableOpacity onPress={() => onImageClick("cake1.png")}>
          <View
            style={{
              backgroundColor: "#F0F1F5",
              width: 70,
              height: 70,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 10,
            }}
          >
            <Image source={imageMapping["cake1.png"]} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onImageClick("cake2.png")}>
          <View
            style={{
              backgroundColor: "#F0F1F5",
              width: 70,
              height: 70,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 10,
            }}
          >
            <Image source={imageMapping["cake2.png"]} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onImageClick("cake3.png")}>
          <View
            style={{
              backgroundColor: "#F0F1F5",
              width: 70,
              height: 70,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 10,
            }}
          >
            <Image source={imageMapping["cake3.png"]} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onImageClick("cake4.png")}>
          <View
            style={{
              backgroundColor: "#F0F1F5",
              width: 70,
              height: 70,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 10,
            }}
          >
            <Image source={imageMapping["cake4.png"]} />
          </View>
        </TouchableOpacity>
      </View>
      <View style={{ padding: 20, width: "100%" }}>
        {cakes.map((item) => (
          <View key={item.id} style={{ marginBottom: 20, width: "100%" }}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={{ fontSize: 20, fontWeight: 700, color: "#25C3D9" }}>
                ${item.price}
              </Text>
              <View
                style={{
                  backgroundColor: "yellow",
                  marginHorizontal: 10,
                  padding: 5,
                  borderRadius: 10,
                }}
              >
                <Text style={{ color: "red" }}>Buy 1 get 1</Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <View>
                <Text style={{ fontSize: 18, fontWeight: 700 }}>
                  {item.name}
                </Text>
                <Text style={{ color: "gray" }}>{item.descreption}</Text>
              </View>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image
                  source={require("./assets/Rating.png")}
                  style={{ marginHorizontal: 10 }}
                />
                <Text>{item.star}</Text>
              </View>
            </View>
            {/* Hiển thị các size với tùy chọn chọn size */}
            <View style={{}}>
              <Text style={{ color: "gray" }}>Size</Text>
              <View style={{ flexDirection: "row", marginVertical: 10 }}>
                {availableSizes.map((size) => (
                  <TouchableOpacity
                    key={size}
                    onPress={() => setSelectedSize(size)}
                    style={{
                      padding: 10,
                      marginRight: 10,
                      borderRadius: 5,
                      backgroundColor:
                        selectedSize === size ? "red" : "#F0F1F5", // Đổi màu nếu size được chọn
                    }}
                  >
                    <Text
                      style={{
                        color: selectedSize === size ? "white" : "black",
                      }}
                    >
                      {size}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
            <View>
              <Text style={{ color: "gray" }}>Quantity</Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <TouchableOpacity onPress={subQuantity}>
                    <Image source={require("./assets/delete.png")} />
                  </TouchableOpacity>
                  <TextInput
                    value={quantity}
                    onChangeText={setQuantity}
                    keyboardType="numeric"
                    style={{ width: 30, height: 30, textAlign: "center" }}
                  />
                  <TouchableOpacity onPress={addQuantity}>
                    <Image source={require("./assets/add.png")} />
                  </TouchableOpacity>
                </View>
                <View>
                  <Text>
                    Total:{" "}
                    <Text style={{ fontSize: 20, fontWeight: 700 }}>
                      ${item.price*quantity}
                    </Text>
                  </Text>
                </View>
              </View>
            </View>
          </View>
        ))}
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          borderTopWidth: 1,
          borderBottomWidth: 1,
          paddingBottom: 10,
          paddingTop: 10,
        }}
      >
        <Text style={{ fontWeight: 700 }}>Size guide</Text>
        <Text>{">"}</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          borderBottomWidth: 1,
          paddingBottom: 10,
          paddingTop: 10,
        }}
      >
        <Text style={{ fontWeight: 700 }}>Review (99)</Text>
        <Text>{">"}</Text>
      </View>
      <View style={{ justifyContent: "center", width: "100%" }}>
        <TouchableOpacity
          style={{
            width: "100%",
            padding: 10,
            backgroundColor: "#25C3D9",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 50,
            marginVertical: 10,
          }}
        >
          <Text style={{ color: "#FFF" }}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
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
          // options={{ headerShown: false }}
        />
        <Stack.Screen name="Screen02" component={Screen02} />
        <Stack.Screen name="Screen03" component={Screen03} />
        <Stack.Screen name="Screen04" component={Screen04} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    padding: 20,
  },
});
export default App;
