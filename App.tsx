/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import type { PropsWithChildren } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  Button,
  Alert


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

function Section({ children, title }: SectionProps): JSX.Element {
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

  const [text, setText] = useState("")

  return (

    <SafeAreaView style={styles.background}>
      {/*placeholder=kutunun içinde görünen yazı. Girilmesini istediğimiz bilgi açıklaması 
         padding= metnin sol kenar boşluğu
         */}
      <TextInput
        style={{ width: 200, height: 50, borderWidth: 1, padding: 7 }}
        placeholder='what your name?'
        value={text}
        onChangeText={(e) => setText(e)}
        secureTextEntry={true}
      />
      <Button
        title="Press me!"
        onPress={() => Alert.alert("hello" + text, "do you enjoy the tutorial?",
          [

            { text: "yes", onPress: () => console.log("yes dediniz") },
            { text: "hell yess!!!", onPress: () => console.log("hell yess dediniz") }

          ]
        )}

      />

    </SafeAreaView>
  );


}

const styles = StyleSheet.create({
  background: {

    backgroundColor: 'lightgrey',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'

  }

});

export default App;
