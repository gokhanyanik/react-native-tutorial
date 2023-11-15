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
        {"\n"}
        {"\n"}
        <Text style={{color:'blue'}}>fenerbahçe </Text>
        {"\n"}
        {"\n"}
        severler


      </Text>
    </SafeAreaView>
  );
  
   
}

const styles = StyleSheet.create({
  background:{
    flex:1,
    backgroundColor:'red',
    
  }
});

export default App;
