import {StatusBar} from 'expo-status-bar';
import {SafeAreaView, StyleSheet} from 'react-native';
import Navigator from './navigators/Navigator';

const App = () => {
  console.log('App loaded!');
  return (
    <SafeAreaView style={styles.container}>
      <Navigator />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;
