import React from 'react';
import {ImageBackground, StyleSheet, View} from 'react-native';
import {COLORS, IMAGES, SPACINGS} from '../../constants';
import {ButtonAuth, Text} from '../../components';

const DashBoard = () => {
  return (
    <ImageBackground style={styles.container} source={IMAGES.background_login}>
      <View style={styles.content}>
        <Text h1 color={COLORS.white}>
          Boost your{'\n'}style now
        </Text>
        <Text
          h5
          color={COLORS.white}
          lineHeight={SPACINGS.xl}
          marginTop={SPACINGS.lg}>
          Appear more confident with the{'\n'}best shoes with elegant designs
        </Text>
        <ButtonAuth marginTop={200}>Sign up</ButtonAuth>
        <ButtonAuth marginTop={SPACINGS.lg} variant="outline">
          Sign in
        </ButtonAuth>
      </View>
    </ImageBackground>
  );
};

export default DashBoard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    backgroundColor: COLORS.black,
    justifyContent: 'center',
    padding: SPACINGS.xxxl,
    paddingTop: 120,
  },
});
