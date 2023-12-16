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

       <View style={{flex:1,backgroundColor:'purple'}}/> 
       <View style={{flex:1,backgroundColor:'yellow'}}/>
       <View style={{flex:1,backgroundColor:'orange'}}/>
 
    </SafeAreaView>

);
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'brown',
    //viwleri yatay sıralar.
   
    
    
  }
});

export default App;
