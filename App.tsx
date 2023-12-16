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

       <View style={{height:100,width:75,backgroundColor:'purple'}}/>
       <View style={{height:100,width:75,backgroundColor:'yellow'}}/>
       <View style={{height:100,width:75,backgroundColor:'orange'}}/>
       
      



    </SafeAreaView>
  );
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
