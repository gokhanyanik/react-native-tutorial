import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

import Menu from './components/Menu';

function App(): JSX.Element {

  const resimA = require('./assets/coffee_cup_icon.png');
  const resimB = require('./assets/arrow_icon.png');
  const resimC = require('./assets/coffee_icon.png');
  const resimD = require('./assets/coffee_cup_drink.png');

  return (
    <View style={styles.container}>
      <View style={styles.child}>
        <Image source={require('./assets/menu_left_icon.png')}
          style={styles.image}
        />
        <Image source={require('./assets/search_icon.png')}
          style={styles.image}
        />
      </View>
      <Text style={styles.text}>It's Greed Day For Coffee</Text>

      <Menu resim={resimA} isim={'Macchiato'} resim2={resimB} />
      <Menu resim={resimC} isim={'Espresso'} resim2={resimB} />
      <Menu resim={resimD} isim={'Latte'} resim2={resimB} />

    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'yellow'
  },
  child: {
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  image: {
    resizeMode: 'center',
    height: 50,
    width: 50
  },
  text: {
    fontSize: 40,
    fontWeight: 'bold'
  }
});

export default App;
