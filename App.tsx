import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Platform,
} from 'react-native';

function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.background}>
      <Text style={[styles.text,styles.metin]}> Bu bir {Platform.OS} uygulamasidir </Text>
 
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
