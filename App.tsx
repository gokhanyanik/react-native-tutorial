import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
} from 'react-native';

function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.background}>
      {/* <Text style={{color:'blue',background.Text}}> StyleSheet deneme metni</Text> yanlış!!! */}
      <Text style={[styles.text,styles.metin]}> StyleSheet deneme metni</Text>
      <Text style={styles.text}> StyleSheet deneme metni</Text>
      <Text style={[styles.text,styles.metin2]}> StyleSheet deneme metni</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: 'yellow',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'blue',
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
