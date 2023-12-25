import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

import Menu from './components/Menu';
import Contents from './components/Contents';



function App(): JSX.Element {

  const resimA = require('./assets/coffee_cup_icon.png');
  const resimB = require('./assets/arrow_icon.png');
  const resimC = require('./assets/coffee_icon.png');
  const resimD = require('./assets/coffee_cup_drink.png');

  const resim1 = require('./assets/arrow_icon.png');
  const resim2=require('./assets/coffee_cup_drink.png');


  return (
    <View style={{flex:1}}>
      

      
      <Contents imageLeft={resim1} menuName={'Maciatto'} image={resim2} name={'Maciatto'} price={200}/>


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
