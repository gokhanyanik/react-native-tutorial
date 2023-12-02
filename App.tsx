import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Platform,
  View,
} from 'react-native';

function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.background}>
      <View style={styles.style1}>
        <Text style={styles.text}>Burada birinci view olacak ve içeriği title olmali</Text>
      </View>
      <View style={styles.style2}>
        <Text>Burada ikinci view olacak ve içeriği image olmali</Text>
      </View>
      <View style={styles.style3}>
        <Text style={styles.text2}>Burada üçüncü view olacak ve içeriği text olmali</Text>
      </View>
      <View style={styles.style4}>
        <Text style={styles.text2}>Burada dördüncü view olacak ve içeriği textinput olmali</Text>
      </View>
      <View style={styles.style5}>
        <Text style={styles.text}>Burada beşinci view olacak ve içeriği button olmali</Text>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  background: {
    backgroundColor: 'white',
    flex: 1,
  },
  style1: {
    backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    flex: 1
  },
  style2: {
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    height: 150,
    flex: 4
  },
  style3: {
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    height: 130,
    flex: 4
  },
  style4: {
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    height: 70,
    flex: 1
  },
  style5: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    height: 70,
    flex: 1
  },
  text: {
    fontSize: 15,
    fontWeight: 'bold'
  },
  text2: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  }
});

export default App;
