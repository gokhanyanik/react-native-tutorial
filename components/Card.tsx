/**import işlemleri */
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Platform,
  View,
  Image,
} from 'react-native';
//props tanımlama yapılıyor...CardProps tanımlanıcak propsların ana başlığı olarak düşünülebilir.
interface CardProps {
  resim:string,
  star:string,
  aciklama:string,
  paragraf:string,
}


function Card(props:CardProps): JSX.Element {
    return (
      <View style={styles.container}>
      <View style={styles.top}>
       <View style={styles.middle}>
         <View style={styles.bottom}>
         <Image
           source={{uri:props.resim}}
           style={{height:100,width:100,alignItems:'flex-start'}}
         /> 
         </View>
         <View style={styles.bottom}>
           <View style={[styles.middle,{minHeight:20,backgroundColor:'red'}]}>
               <Text style={{textAlign:'center',fontWeight:'900'}}>{props.star}</Text>
           </View>
           <View style={[styles.middle,{minHeight:20,backgroundColor:'white'}]}>
           <Text numberOfLines={2} style={{alignItems:'center'}}>{props.aciklama}</Text>
           </View>
         </View>
       </View>
       <View style={styles.middle}>
         <Text>{props.paragraf}</Text>
       
       </View>
      </View>
    </View>
    );
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      margin: 10,
   },
     top: {
      flex: 0.8,
      backgroundColor: 'grey',
   },
     middle: {
      flex: 0.5,
      backgroundColor: 'yellow',
      margin: 10,
      flexDirection:'row',
      height:100,
   },
     bottom: {
      flex: 0.8 ,
      backgroundColor: 'blue',
   },
  });
  export default Card;