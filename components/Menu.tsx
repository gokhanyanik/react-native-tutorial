import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Platform,
  View,
  Image,
  TouchableOpacity,
  ImageRequireSource,
} from 'react-native';

interface MenuProps {
  resim:ImageRequireSource,
  isim:string,
  resim2:ImageRequireSource,
}

function Menu(props: MenuProps): JSX.Element {
console.log("---",props.resim)
  return (


    <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: 'pink' }}>
      <Image source={props.resim}
        style={styles.image}
      />
      <View style={{ justifyContent: 'center', backgroundColor: 'orange', flex: 1 }}>
        <Text style={{ fontSize: 25, fontWeight: 'bold' }}>{props.isim}</Text>
      </View>
      <Image source={props.resim2}
        style={styles.image}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  image: {
    resizeMode: 'center',
    height: 50,
    width: 50,
  },


});

export default Menu;