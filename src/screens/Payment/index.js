/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {Header, Text} from '../../components';
import {COLORS, FONTS, ICONS, PAYMENT_DATA, SPACINGS} from '../../constants';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Button} from '@rneui/base';

const Payment = () => {
  return (
    <View style={styles.container}>
      <Header hasIconRight={false}>Checkout</Header>
      {/* content */}
      <View style={styles.content}>
        {/* payment list */}
        <View style={styles.paymentList}>
          <Text
            color={COLORS.blackLight}
            size={17}
            marginBottom={SPACINGS.md}
            weight={FONTS.weights.semiBold}>
            Payment
          </Text>
          {PAYMENT_DATA.map(el => {
            return (
              <TouchableOpacity style={styles.paymentItem}>
                <View style={styles.iconItemWrap}>
                  <Image
                    source={el.icon}
                    style={styles.iconItem}
                    resizeMode="contain"
                  />
                </View>
                <Text
                  marginHorizontal={SPACINGS.md}
                  flex={1}
                  size={15}
                  weight={FONTS.weights.mixed}
                  color={COLORS.blackLight}>
                  Master Card
                </Text>
                <FontAwesome
                  name={el.isSelect ? 'dot-circle-o' : 'circle-thin'}
                  size={24}
                  color={COLORS.primary}
                />
              </TouchableOpacity>
            );
          })}
          <TouchableOpacity style={styles.paymentItem}>
            <View style={styles.iconItemWrap}>
              <Image
                source={ICONS.menu_vertical}
                style={styles.iconItem}
                resizeMode="contain"
              />
            </View>
            <Text
              marginHorizontal={SPACINGS.md}
              flex={1}
              size={15}
              weight={FONTS.weights.mixed}
              color={COLORS.blackLight}>
              All 15 methods
            </Text>
            <FontAwesome
              name="angle-right"
              size={24}
              style={{marginRight: 5}}
            />
          </TouchableOpacity>
        </View>
        {/* promo code */}
        <View style={styles.paymentList}>
          <Text
            color={COLORS.blackLight}
            size={17}
            marginBottom={SPACINGS.md}
            weight={FONTS.weights.semiBold}>
            Promo Code
          </Text>
          <View style={styles.inputWrap}>
            <TextInput style={styles.input} placeholder="Promo Code" />
            <Button
              title="Apply"
              buttonStyle={{
                backgroundColor: COLORS.primary,
                borderRadius: SPACINGS.md,
                paddingHorizontal: SPACINGS.lg,
              }}
            />
          </View>
        </View>
      </View>
      {/* footer */}
      <View>
        <View style={{...styles.rowCenter, marginTop: SPACINGS.xl}}>
          <Text
            color={COLORS.blackLight}
            weight={FONTS.weights.mixed}
            size={FONTS.sizes.md}>
            Total Payment
          </Text>
          <Text
            color={COLORS.blackLight}
            weight={FONTS.weights.mixed}
            size={FONTS.sizes.lg}>
            $840.000
          </Text>
        </View>
        <Button
          title="Pay Now"
          containerStyle={{
            margin: SPACINGS.xxxl,
          }}
          buttonStyle={{
            backgroundColor: COLORS.primary,
            borderRadius: SPACINGS.md,
            height: 52,
          }}
        />
      </View>
    </View>
  );
};

export default Payment;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  paymentList: {
    padding: SPACINGS.xxxl,
    paddingTop: 0,
  },
  paymentItem: {
    margin: SPACINGS.md,
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconItem: {
    width: 24,
    height: 24,
  },
  iconItemWrap: {
    width: 43,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: SPACINGS.sm,
    backgroundColor: COLORS.smoke,
  },
  input: {
    height: 62,
    flex: 1,
  },
  inputWrap: {
    backgroundColor: COLORS.smoke,
    borderRadius: SPACINGS.md,
    paddingHorizontal: SPACINGS.lg,
    flexDirection: 'row',
    alignItems: 'center',
  },
  content: {
    flex: 1,
  },
  rowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: SPACINGS.xxxl,
  },
});
