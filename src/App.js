import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ButtonAuth, Text} from './components';

const App = () => {
  return (
    <View style={styles.container}>
      <ButtonAuth>Sign Up</ButtonAuth>
      <ButtonAuth variant="outline">Sign Up</ButtonAuth>
      <Text h1>Sign Up</Text>
    </View>
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
