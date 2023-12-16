import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Platform,
  View,
  Image,
} from 'react-native';
import Card from './components/Card'

function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.container}>

       <View style={{height:100,width:75,backgroundColor:'purple',position:'absolute',top:40,left:40,zIndex:4}}/> 
       <View style={{height:100,width:75,backgroundColor:'yellow',position:'absolute',top:60,left:60,zIndex:2}}/>
       <View style={{height:100,width:75,backgroundColor:'orange',position:'absolute',top:80,left:80,zIndex:3}}/>
 
    </SafeAreaView>
//zIndex arka arkaya siralanan viwlerin siralamasini degistirmek icin kullanilir.
//normalde en altta gorunen viwi en ustte gormek icin zindex degerini 1 veririz.
//bir kac tane zindex birlikte kullanilirsa en buyuk deger en ustte olur sayi arttikca siralamada ilk sirada gosterilir.  
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'brown',
    //viwleri yatay sıralar.
    flexDirection:'row',
    justifyContent:'center',// elementleri main ekseninde ortalar.eger flexdirection row verildiyse y ekseninde yatay hizalıyacaktır.
    alignItems:'center',
    
  }
});

export default App;
