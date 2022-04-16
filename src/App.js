import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ButtonAuth} from './components';

const App = () => {
  return (
    <View style={styles.container}>
      <ButtonAuth>Sign Up</ButtonAuth>
      <ButtonAuth variant="outline">Sign Up</ButtonAuth>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
});
