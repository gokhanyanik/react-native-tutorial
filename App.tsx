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
 
  
});

export default App;
