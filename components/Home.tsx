import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Platform,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

// proje deki anasayfa, coffee cup ikonu olan sayfa...

function App(): JSX.Element {

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Image source={require('./coffeeCup.png')}
        style={{ width: 300, height: 300 }}
      />
      <Text style={{ fontSize: 30, fontWeight: 'bold', textDecorationLine: 'underline' }}> Coffee Hub </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center'
  },
  touchable: {
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    borderRadius: 1000,
    margin: 10,
  },
  text: {
    color: 'white',
    fontSize: 20

  }
});

export default App;
