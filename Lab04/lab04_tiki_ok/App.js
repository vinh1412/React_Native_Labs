import { Text, SafeAreaView, StyleSheet, Image, TouchableOpacity, TextInput, View ,ScrollView} from 'react-native';
import { useState } from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
const Lab04_Tiki_Ok = () => {
  const [count,setCount]=useState(1);
  const [price, setPrice] = useState(141800); 
  const plusCountClick= () => {
    setCount(prevCount=>{
      const newCount = prevCount+1; 
      setPrice(141800 * newCount);
      return newCount;
    })
  };
  const minusCountClick= () => {
    setCount(prevCount=>{
        const newCount =Math.max(1, prevCount-1); 
        setPrice(141800 * newCount);
        return newCount;
      })
    };
  return (
    <SafeAreaView style={{backgroundColor:'#C4C4C4', flex:1}}>
    <ScrollView contentContainerStyle={{flex:1}}>
      {/*View header */}
      <View style={{backgroundColor:'white', height: 350}}>
      {/*View contain IMG and Product Detail */}
      <View style={{
        flexDirection:'row',
        paddingTop: 40,
        height: 220,
        justifyContent:'space-around',
      }}>
        {/*View contain IMG */}
        <View style={{
          justifyContent:'space-between'
        }}>
          <Image source={require("./assets/book.png")} style={{width:120, height:150}}/>
          <View>
            <Text style={{color:'#011627', fontWeight: 700, fontSize:12}}>Mã giảm giá đã lưu</Text>
          </View>
        </View>
        {/*View contain Price, Context Product */}
        <View style={{
          justifyContent:'space-between'
        }}>
          <Text style={styles.paragraph}>Nguyên hàm tích phân và ứng dụng</Text>
          <Text style={styles.paragraph}>Cung cấp bởi Tiki Trading</Text>
          <Text style={{color:'#EE0D0D', fontWeight: 700, fontSize: 18}}>{price.toLocaleString()} đ</Text>
          <Text style={{
            color:'#808080', 
            fontWeight: 700, 
            fontSize: 12, 
            textDecorationLine:'line-through',
            textDecorationColor:'#808080',
            textDecorationStyle:'solid',
            }}>
              141.800 đ
            </Text>
          {/*View contain increate, decreate quantity, buy later */}
          <View style={{
            flexDirection:'row',
            justifyContent:'space-between',
            alignItems:'center'
          }}>
          {/*View contain increate, decreate quantity*/}
            <View style={{
            flexDirection:'row'
            }}>
              <TouchableOpacity onPress={minusCountClick}>
                <Icon name="minussquare" color="#C4C4C4" size={30}/>
              </TouchableOpacity>
              <TextInput style={styles.textinput} value={String(count)}/>
              <TouchableOpacity onPress={plusCountClick}>
                <Icon name="plussquare" color="#C4C4C4" size={30}/>
              </TouchableOpacity>
            </View>
            {/*View buy later*/}
            <View>
              <Text style={{color:'#134FEC', fontWeight: 700, fontSize:12}}>Mua sau</Text>
            </View>
          </View>
          {/*View see here*/}
          <View>
            <Text style={{color:'#134FEC', fontWeight: 700, fontSize:12}}>Xem tại đây</Text>
          </View>
        </View>
      </View>
      {/*View discount, button apply*/}
      <View style={{
          flexDirection:'row',
          justifyContent: 'space-around',
          alignItems:'center',
          paddingTop: 50
        }}>
        {/*View discount*/}
        <View style={{
            flexDirection:'row',
            borderWidth:2,
            height: 45,
            width:208,
            justifyContent:'space-around',
            alignItems:'center'
          }}>
          {/*View retangle yellow*/}
          <View style={{backgroundColor:'#F2DD1B', width:32, height:16}}/>
          <Text style={{fontWeight: 700, fontSize:18}}>Mã giảm giá</Text>
        </View>
        {/*View button apply*/}
        <TouchableOpacity style={{
            height: 45, 
            width: 99, 
            backgroundColor:'#0A5EB7', 
            justifyContent:'center', 
            alignItems: 'center'
            }}>
            <Text style={{color: 'white', fontSize:20, fontWeight:700}}>Áp dụng</Text>
        </TouchableOpacity>
      </View>
      </View>

      {/*View center*/}
      <View style={{
        flexDirection: 'row',
        justifyContent:'space-around',
        alignItems:'center',
        backgroundColor:'white',
        height: 51,
        marginTop: 20,
        marginBottom: 20
      }}>
        <Text style={{
          fontSize: 14, 
          fontWeight: 700, 
          color:'#011627'
        }}>Bạn có phiếu quà tặng Tiki/Got it/ Urbox?
        </Text>
        <Text style={{fontWeight: 700, fontSize: 12, color:'#134FEC'}}>Nhập tại đây?</Text>
      </View>
      {/*View footer*/}
      <View style={{
        justifyContent:'space-between', flex:1
      }}>
        {/** View provisional */}
        <View style={{
            flexDirection:'row',
            justifyContent:'space-around',
            alignItems:'center',
            height: 51, 
            backgroundColor:'white',
          }}>
          <Text style={{
            fontSize: 18, 
            fontWeight: 700, 
            color:'#011627',
          }}>
            Tạm tính
          </Text>
          <View style={{width: 100}}></View>
          <Text style={{fontWeight: 700, fontSize: 18, color:'#EE0D0D'}}>{price.toLocaleString()} đ</Text>
        </View>
        {/** View money */}
        <View style={{height: 120, backgroundColor: 'white', justifyContent: 'space-evenly'}}>
          <View style={{
            flexDirection:'row',
            justifyContent:'space-around',
            }}>
            <Text style={{color:'#808080', fontSize: 18, fontWeight:700}}>Thành tiền</Text>
            <View style={{width: 100}}></View>
            <Text style={{color:'#EE0D0D', fontSize: 20, fontWeight:700}}>{price.toLocaleString()} đ</Text>
          </View>
          {/** Button Order */}
          <View style={{
            justifyContent:'center',
            alignItems: 'center'
            }}>
            <TouchableOpacity style={{
              height: 45, 
              width: 360, 
              backgroundColor:'#E53935', 
              justifyContent:'center', 
              alignItems: 'center'
              }}>
              <Text style={{
                color: 'white', 
                fontSize:20, 
                fontWeight:700, 
                textTransform:'uppercase'
              }}>
                Tiến hành đặt hàng
              </Text>
            </TouchableOpacity>
        </View>
        </View>
      </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles=StyleSheet.create({
  paragraph:{
    fontSize:12,
    fontWeight: 700
  },
  textinput:{
    height: 30,
    width: 30, 
    textAlign:'center',
    fontSize: 20,
    color:'black'
  }
})
export default Lab04_Tiki_Ok;
