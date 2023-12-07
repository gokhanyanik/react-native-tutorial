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
       <View style={styles.bottom}/>
       <View style={styles.bottom}>
         <View style={styles.middle}/>
         <View style={styles.middle}/>
       </View>
     </View>
     <View style={styles.middle}/>
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
    borderWidth:5
    
  },
  top: {
    flex: 0.8,
    backgroundColor: 'grey',
    borderWidth: 5,
   
  },
  middle: {
    flex: 0.5,
    backgroundColor: 'beige',
    borderWidth: 3,
    margin: 10,
    flexDirection:'row'
    
  },
  bottom: {
    flex: 0.5,
    backgroundColor: 'pink',
    borderWidth: 3,
    
  },
});

export default App;
