import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function AssetExample() {
  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity>
          <Text>ADD</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>EDIT</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>DELETE</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    height: 128,
    width: 128,
  },
});
