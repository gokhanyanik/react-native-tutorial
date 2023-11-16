/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App(): JSX.Element {
  
  
  
  return (
    
    <SafeAreaView style={styles.background}>
      <Text onPress={()=> console.log("hello world")}>hello world</Text>   
     
     
      <Text numberOfLines={2}>
        ı work in react ı work in react ı work in react ı work in react ı work in react ı work in react ı work in react ı work in react ı work in react
      </Text>

      <Text style={{color:'yellow',fontWeight:'bold'}}>

        merhaba 
        {"\n"}   {/*bir alt satıra geçer.*/ }
        {"\n"}
        <Text style={{color:'blue'}}>fenerbahçe </Text>
        {"\n"}
        {"\n"}
        severler
      </Text>

      <Image
      source={{uri:"https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/bltdc07f051caa5cdf6/625adf7b956c474ead99e528/DepoPhotos_14812567_(1).jpg?auto=webp&format=pjpg&width=640&quality=60",
              width:400,
              height:100,
              }}
              resizeMode='contain'
              fadeDuration={6000}
              
      />
      <TouchableHighlight onPress={()=> console.log("Open eyes!!")} >
      <View style={{width:'100%', height:75, backgroundColor:'cyan'}}></View>
      </TouchableHighlight>
      <TouchableOpacity onPress={()=> console.log("reactnative!!")} >
      <View style={{width:'100%', height:75, backgroundColor:'red'}}></View>
      </TouchableOpacity>
      
    </SafeAreaView>
  );
  
   
}

const styles = StyleSheet.create({
  background:{
    flex:1,
    backgroundColor:'white',
    
  }
});

export default App;
