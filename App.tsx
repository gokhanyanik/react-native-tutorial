import React, { useState , useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Platform,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';


function App(): JSX.Element {
  const [sayi, setSayi] = useState(0)

  useEffect(()=>{
    console.log("update edilen useeffect değeri",sayi)
  })
  useEffect(()=>{
    console.log("ilk render edilen useeffecti")
  },[])
  useEffect(()=>{
    console.log("sayı değeri her değiştiğinde çalış",sayi)
  },[sayi])


  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          setSayi(sayi + 1)
         
        }}
        style={[styles.touchable, { backgroundColor: '#0f0' }]}>
        <Text style={styles.text}>+</Text>
      </TouchableOpacity>
      <Text style={{ fontSize: 40 }}>{sayi} </Text>
      <TouchableOpacity
        onPress={() => {
          setSayi(sayi - 1)
         
        }}
        style={[styles.touchable, { backgroundColor: 'red' }]}>
        <Text style={styles.text}>-</Text>
      </TouchableOpacity>

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
