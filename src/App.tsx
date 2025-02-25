import React, {useState} from 'react';
import {StatusBar} from 'expo-status-bar';
import {SafeAreaView, StyleSheet, Text, Button} from 'react-native';

const App = () => {
  const [text1, setText1] = useState('Moro!');
  const [text2, setText2] = useState('Tää skulaa?');

  const changeText1 = () => {
    setText1((prevText) => (prevText === 'Moro!' ? 'Hello!' : 'Moro!'));
  };

  const changeText2 = () => {
    setText2((prevText) =>
      prevText === 'Tää skulaa?' ? 'Does this work?' : 'Tää skulaa?',
    );
  };

  console.log('App loaded!');
  return (
    <SafeAreaView style={styles.container}>
      <Text>{text1}</Text>
      <Button title="Change Text 1" onPress={changeText1} />
      <Text>{text2}</Text>
      <Button title="Change Text 2" onPress={changeText2} />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
