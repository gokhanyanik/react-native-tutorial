import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Platform,
  View,
  Image,
} from 'react-native';
import Card from './components/Card'

function App(): JSX.Element {
  return (
    <View style={styles.container}>
      <Card star={'TADİÇ'} aciklama={'tadiç on fire'} paragraf={'tadiç tadiç tadi. tadiç'} resim="https://tmssl.akamaized.net/images/foto/newsansicht/dusan-tadic-fenernahce-2023-24-1689579033-111706.jpg?lm=1689579051" />
      <Card star={'DZEKO'} aciklama={' Boşnak millî futbolcudur. Forvet pozisyonunda görev yapan oyuncu, Süper Lig takımlarından Fenerbahçede forma giymektedir'} paragraf={'jeko jeko jeko jeko'} resim="https://cdn1.ntv.com.tr/gorsel/u1cvKpvuxUKsvkB2b-AjgQ.jpg?width=952&height=540&mode=both&scale=both" />
      <Card star={'KAPTAN'} aciklama={'Dzeko büyük kaptan'} paragraf={'kaptan kaptan kaptan'} resim="https://pbs.twimg.com/media/FzPaAOrXwAkFIH1.jpg" />
      <Card star={'İrfan Can Kahveci'} aciklama={'süper bilek'} paragraf={'kaptan kaptan kaptan'} resim="https://pbs.twimg.com/media/FzPaAOrXwAkFIH1.jpg" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 5,
    margin: 10,
  }
});

export default App;
