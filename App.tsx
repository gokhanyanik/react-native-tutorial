import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Platform,
  Dimensions,
} from 'react-native';

function App(): JSX.Element {
  return (
    console.log(Platform.OS,Dimensions.get("screen")),
    <SafeAreaView style={styles.background}>
      <Text style={[styles.text,styles.metin]}> Bu bir {Platform.OS} uygulamasidir </Text>
      <Text style={styles.text}>Height:{Dimensions.get("window").height}</Text>
      <Text style={styles.text}>Widht:{Dimensions.get("window").width}</Text>
      <Text style={styles.text}>Height:{Dimensions.get("screen").height}</Text>
      <Text style={styles.text}>Widht:{Dimensions.get("screen").width}</Text>
 
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: Platform.OS==="ios" ? "yellow" : "green",
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 25
  },
  metin:{
    backgroundColor:'green'
  
  },
  metin2:{
    color:'red',
    fontSize:30
  }
  
});

export default App;
