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
  Alert,
 


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
       <ScrollView> 
      <Text style={{fontSize:30}}>
        Türk Edebiyatında düz yazı olan metin türlerinin ayrı bir yeri vardır. Metinler, şiirler gibi uyak ve ahenge bağlı kalmadan, direk yazıya dökülüyorlar. Bilgi, duygu ve düşüncelerin yansıtılması ve aktarılması bakımından önemlidirler. Bu nedenle metin türlerini iyi öğrenip, kültürünüzü geliştirebilirsiniz. Hatta düz yazı örnekleri üretebilirsiniz. Örnekleriyle birlikte edebi yazı türlerini derledik.
        Türk Edebiyatında düz yazı olan metin türlerinin ayrı bir yeri vardır. Metinler, şiirler gibi uyak ve ahenge bağlı kalmadan, direk yazıya dökülüyorlar. Bilgi, duygu ve düşüncelerin yansıtılması ve aktarılması bakımından önemlidirler. Bu nedenle metin türlerini iyi öğrenip, kültürünüzü geliştirebilirsiniz. Hatta düz yazı örnekleri üretebilirsiniz. Örnekleriyle birlikte edebi yazı türlerini derledik.
        Türk Edebiyatında düz yazı olan metin türlerinin ayrı bir yeri vardır. Metinler, şiirler gibi uyak ve ahenge bağlı kalmadan, direk yazıya dökülüyorlar. Bilgi, duygu ve düşüncelerin yansıtılması ve aktarılması bakımından önemlidirler. Bu nedenle metin türlerini iyi öğrenip, kültürünüzü geliştirebilirsiniz. Hatta düz yazı örnekleri üretebilirsiniz. Örnekleriyle birlikte edebi yazı türlerini derledik.
        Türk Edebiyatında düz yazı olan metin türlerinin ayrı bir yeri vardır. Metinler, şiirler gibi uyak ve ahenge bağlı kalmadan, direk yazıya dökülüyorlar. Bilgi, duygu ve düşüncelerin yansıtılması ve aktarılması bakımından önemlidirler. Bu nedenle metin türlerini iyi öğrenip, kültürünüzü geliştirebilirsiniz. Hatta düz yazı örnekleri üretebilirsiniz. Örnekleriyle birlikte edebi yazı türlerini derledik.
        Türk Edebiyatında düz yazı olan metin türlerinin ayrı bir yeri vardır. Metinler, şiirler gibi uyak ve ahenge bağlı kalmadan, direk yazıya dökülüyorlar. Bilgi, duygu ve düşüncelerin yansıtılması ve aktarılması bakımından önemlidirler. Bu nedenle metin türlerini iyi öğrenip, kültürünüzü geliştirebilirsiniz. Hatta düz yazı örnekleri üretebilirsiniz. Örnekleriyle birlikte edebi yazı türlerini derledik.
        Türk Edebiyatında düz yazı olan metin türlerinin ayrı bir yeri vardır. Metinler, şiirler gibi uyak ve ahenge bağlı kalmadan, direk yazıya dökülüyorlar. Bilgi, duygu ve düşüncelerin yansıtılması ve aktarılması bakımından önemlidirler. Bu nedenle metin türlerini iyi öğrenip, kültürünüzü geliştirebilirsiniz. Hatta düz yazı örnekleri üretebilirsiniz. Örnekleriyle birlikte edebi yazı türlerini derledik.
        Türk Edebiyatında düz yazı olan metin türlerinin ayrı bir yeri vardır. Metinler, şiirler gibi uyak ve ahenge bağlı kalmadan, direk yazıya dökülüyorlar. Bilgi, duygu ve düşüncelerin yansıtılması ve aktarılması bakımından önemlidirler. Bu nedenle metin türlerini iyi öğrenip, kültürünüzü geliştirebilirsiniz. Hatta düz yazı örnekleri üretebilirsiniz. Örnekleriyle birlikte edebi yazı türlerini derledik.
        Türk Edebiyatında düz yazı olan metin türlerinin ayrı bir yeri vardır. Metinler, şiirler gibi uyak ve ahenge bağlı kalmadan, direk yazıya dökülüyorlar. Bilgi, duygu ve düşüncelerin yansıtılması ve aktarılması bakımından önemlidirler. Bu nedenle metin türlerini iyi öğrenip, kültürünüzü geliştirebilirsiniz. Hatta düz yazı örnekleri üretebilirsiniz. Örnekleriyle birlikte edebi yazı türlerini derledik.


      </Text>

       </ScrollView>






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
