/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, TouchableHighlight, View} from 'react-native';
import React from 'react';
import {Header, Text} from '../../components';
import {SwipeListView} from 'react-native-swipe-list-view';
import {COLORS, FONTS, SHOES_DATA, SPACINGS} from '../../constants';
import {Button} from '@rneui/base';
import {Image} from 'react-native';

const Cart = ({navigation}) => {
  const _renderItem = (data, rowMap) => {
    const {picture, title, price} = data.item || {};

    return (
      <View style={styles.itemWrap}>
        <Image source={picture} style={styles.itemImage} />
        <View style={styles.itemContent}>
          <Text
            weight={FONTS.weights.mixed}
            color={COLORS.blackLight}
            size={FONTS.sizes.md}>
            {title}
          </Text>
          <Text
            color={COLORS.blackLight}
            weight={FONTS.weights.semiBold}
            size={FONTS.sizes.sm}
            marginTop={SPACINGS.md}>
            {price}
          </Text>
        </View>
        <View style={styles.itemRight}>
          <Button
            icon={{
              name: 'minus',
              type: 'font-awesome',
              size: 12,
              color: 'white',
            }}
            buttonStyle={{
              width: 18,
              height: 18,
              padding: 0,
              backgroundColor: COLORS.gray,
            }}
          />
          <Text
            color={COLORS.blackLight}
            weight={FONTS.weights.semiBold}
            size={FONTS.sizes.sm}
            marginVertical={SPACINGS.xs}>
            2
          </Text>
          <Button
            icon={{
              name: 'plus',
              type: 'font-awesome',
              size: 12,
              color: 'white',
            }}
            buttonStyle={{
              width: 18,
              height: 18,
              padding: 0,
              backgroundColor: COLORS.primary,
            }}
          />
        </View>
      </View>
    );
  };

  const _renderHiddenItem = (data, rowMap) => {
    return (
      <View style={styles.hiddenWrap}>
        <Button
          icon={{
            name: 'trash-o',
            type: 'font-awesome',
            size: 22,
            color: 'red',
          }}
          buttonStyle={{
            backgroundColor: 'transparent',
            height: '100%',
            width: 75,
          }}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Header hasIconRight={false}>My Cart</Header>
      <SwipeListView
        data={SHOES_DATA}
        renderItem={_renderItem}
        renderHiddenItem={_renderHiddenItem}
        rightOpenValue={-75}
        disableRightSwipe
      />
      <View>
        <View style={styles.rowCenter}>
          <Text
            color={COLORS.textGray}
            weight={FONTS.weights.mixed}
            size={FONTS.sizes.md}>
            Sub Total
          </Text>
          <Text
            color={COLORS.blackLight}
            weight={FONTS.weights.mixed}
            size={FONTS.sizes.lg}>
            $840.000
          </Text>
        </View>
        <View style={{...styles.rowCenter, marginTop: SPACINGS.md}}>
          <Text
            color={COLORS.textGray}
            weight={FONTS.weights.mixed}
            size={FONTS.sizes.md}>
            Shipping
          </Text>
          <Text
            color={COLORS.blackLight}
            weight={FONTS.weights.mixed}
            size={FONTS.sizes.lg}>
            0
          </Text>
        </View>
        <View style={{...styles.rowCenter, marginTop: SPACINGS.xl}}>
          <Text
            color={COLORS.textGray}
            weight={FONTS.weights.mixed}
            size={FONTS.sizes.md}>
            Total
          </Text>
          <Text
            color={COLORS.blackLight}
            weight={FONTS.weights.mixed}
            size={FONTS.sizes.lg}>
            $840.000
          </Text>
        </View>
      </View>
      <Button
        title="Checkout Now"
        containerStyle={{
          margin: SPACINGS.xxxl,
        }}
        buttonStyle={{
          backgroundColor: COLORS.primary,
          borderRadius: SPACINGS.md,
          height: 52,
        }}
        onPress={() => navigation.navigate('Payment')}
      />
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  hiddenWrap: {
    flex: 1,
    height: 80,
    backgroundColor: COLORS.redLight,
    marginBottom: 30,
    borderRadius: SPACINGS.md,
    alignItems: 'flex-end',
    marginHorizontal: SPACINGS.xxxl,
  },
  itemWrap: {
    height: 81,
    backgroundColor: COLORS.white,
    marginBottom: 30,
    borderRadius: SPACINGS.md,
    marginHorizontal: SPACINGS.xxxl,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: SPACINGS.md,
  },
  itemImage: {
    width: 66,
    height: 66,
  },
  itemContent: {
    flex: 1,
    marginHorizontal: SPACINGS.md,
  },
  itemRight: {
    alignItems: 'center',
  },
  rowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: SPACINGS.xxxl,
  },
});
