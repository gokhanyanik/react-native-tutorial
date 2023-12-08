import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Platform,
  View,
  Image,
} from 'react-native';

function App(): JSX.Element {
  return (
    <View style={styles.container}>
    <View style={styles.top}>
     <View style={styles.middle}>
       <View style={styles.bottom}>
       <Image
         source={{uri:'https://minio.yalispor.com.tr/yalispor/blog/alex-de-souza-kimdir-1_606ee18018d64.jpg'}}
         style={{height:250,width:200,alignItems:'flex-start'}}
       /> 
       </View>
       <View style={styles.bottom}>
         <View style={styles.middle}>
             <Text style={{textAlign:'center',fontWeight:'bold'}}>ALEX DE SOUZA</Text>
         </View>
         <View style={styles.middle}>
         <Text numberOfLines={2} style={{alignItems:'center'}}>For stretch to have an effect, children must not have a fixed dimension along the secondary axis.</Text>
         </View>
       </View>
     </View>
     <View style={styles.middle}>
       <Text>
       For stretch to have an effect, children must not have a fixed dimension along the secondary axis. In the following example, setting alignItems: stretch does nothing until the width: 50 is removed from the children.
       </Text>
     
     </View>
    </View>
  </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    margin: 10,
 },
   top: {
    flex: 0.8,
    backgroundColor: 'grey',
 },
   middle: {
    flex: 0.5,
    backgroundColor: 'white',
    margin: 10,
    flexDirection:'row'
 },
   bottom: {
    flex: 0.5,
    backgroundColor: 'white',
 },
});

export default App;
