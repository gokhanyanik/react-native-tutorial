import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Button,
  ImageRequireSource,
} from 'react-native';

interface ContentsProps{
  imageLeft:ImageRequireSource,
  menuName:string,
  image:ImageRequireSource,
  name:string,
  price:number,


}



function Contents(props: ContentsProps): JSX.Element {

  const [sayi, setSayi] = useState(0)
  return (
    <View style={styles.homeConteiner}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={props.imageLeft}
            style={styles.image}
          />
        </View>
        <View style={styles.child}>
          <Text style={styles.text}>{props.menuName}</Text>
        </View>
      </View>
      <View style={styles.conteinerSecond}>
        <Image
          source={props.image}
          style={styles.imageSecond}
        />
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View>
          <View>
            <Text style={{ fontWeight: 'bold', fontSize: 20 }}>{props.name}</Text>
          </View>
          <View>
            <Text style={{ fontWeight: 'bold', fontSize: 20 }}>{props.price}</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity
            onPress={() => {
              setSayi(sayi + 1)
              console.log(sayi)
            }}
            style={styles.touchable}
          >
            <Text>+</Text>
          </TouchableOpacity>
          <Text style={{ fontSize: 30 }}>{sayi}</Text>
          <TouchableOpacity
            onPress={() => {
              setSayi(sayi - 1)
              console.log(sayi)
            }}
            style={styles.touchable}
          >
            <Text>-</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{justifyContent:'flex-end',alignItems:'center',flex:1,backgroundColor:'white'}}>
<Button
title='ADD'
/>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({

  homeConteiner: {
    flex: 1,
    backgroundColor: 'green'
  },
  container: {
    backgroundColor: 'pink',
    // flex: 1,
    flexDirection: 'row',
  },
  conteinerSecond: {
    backgroundColor: '#F57F17',
    flex: 0.6,
    alignItems: 'center',
    justifyContent: 'center'
  },
  imageContainer: {
    backgroundColor: 'orange',
    flex: 1,
    height: 50,
    margin: 5
  },
  image: {
    height: 40,
    width: 40,
  },
  imageSecond: {
    resizeMode: 'center',
    height: 150,
  },
  child: {
    backgroundColor: 'skyblue',
    height: 50,
    flex: 4,
    padding: 10,
    margin: 5,
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  touchable: {
    backgroundColor: 'white',
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center'
  }
});



export default Contents;