/* eslint-disable react-native/no-inline-styles */
import {Button} from '@rneui/base';
import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {Header, Text} from '../../components';
import {FONTS, IMAGES, SPACINGS, COLORS} from '../../constants';

const PaymentSuccess = () => {
  return (
    <View style={styles.container}>
      <Header hasIconRight={false} />
      <View style={styles.content}>
        <Image style={styles.image} source={IMAGES.payment_success} />
        <Text
          weight={FONTS.weights.mixed}
          size={20}
          textAlign="center"
          marginTop={SPACINGS.xxxl}>
          We have received your order successfully
        </Text>
        <Text
          weight={FONTS.weights.regular}
          size={12}
          textAlign="center"
          color={COLORS.textGray}
          marginTop={SPACINGS.xxxl}>
          You can see the location of the courier who delivered your goods now
        </Text>
        <Button
          title="see now"
          containerStyle={{
            width: '100%',
            marginTop: SPACINGS.xxxl,
          }}
          buttonStyle={{
            backgroundColor: COLORS.primary,
            height: 52,
            borderRadius: SPACINGS.md,
          }}
        />
      </View>
    </View>
  );
};

export default PaymentSuccess;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    padding: SPACINGS.xxl,
    paddingTop: 100,
  },
  image: {
    width: 264,
    height: 199,
  },
});
