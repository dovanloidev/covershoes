import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ButtonAuth, Text} from './components';
import {Payment} from './screens';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const App = () => {
  return (
    <SafeAreaProvider>
      <Payment />
    </SafeAreaProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gray',
  },
});
