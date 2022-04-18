/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, View, Image, Pressable} from 'react-native';
import React from 'react';
import {SPACINGS, FONTS, COLORS, ICONS} from '../../../constants';
import {Text} from '../../Text';
import {useNavigation} from '@react-navigation/native';
import {Button} from '@rneui/base';

const ShoesItem = ({shoes}) => {
  const {navigate} = useNavigation();
  const {title, picture, price, author, colors, bgColor} = shoes || {};

  return (
    <Pressable
      style={{...styles.container, backgroundColor: bgColor}}
      onPress={() => navigate('Detail')}>
      <Image style={styles.image} source={picture} resizeMode="contain" />
      <View style={styles.content}>
        <Text size={FONTS.sizes.md} weight={FONTS.weights.mixed}>
          {title}
        </Text>
        <Text
          color={COLORS.textGrey}
          weight={FONTS.weights.mixed}
          marginTop={SPACINGS.sm}>
          {author}
        </Text>
        <Text
          color={COLORS.textGrey}
          weight={FONTS.weights.mixed}
          marginTop={SPACINGS.sm}>
          {colors?.length} Colors
        </Text>
        <View style={styles.priceWrap}>
          <Text
            size={FONTS.sizes.md}
            weight={FONTS.weights.bold}
            marginTop={SPACINGS.lg}>
            {price}
          </Text>
          <Button
            icon={{
              name: 'plus',
              type: 'font-awesome',
              size: 15,
              color: COLORS.blackLight,
            }}
            buttonStyle={{
              width: 35,
              height: 35,
              borderRadius: 39,
              padding: 0,
              backgroundColor: COLORS.white,
            }}
          />
        </View>
      </View>
      {/* new absolute */}
      <View style={styles.newWrap}>
        <Image style={styles.iconNew} source={ICONS.new} />
      </View>
    </Pressable>
  );
};

export default ShoesItem;

const styles = StyleSheet.create({
  container: {
    height: 400,
    width: 230,
    marginRight: SPACINGS.xxxl,
    borderRadius: SPACINGS.lg,
    paddingHorizontal: SPACINGS.lg,
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '60%',
  },
  newWrap: {
    position: 'absolute',
    top: 0,
    left: SPACINGS.lg,
  },
  iconNew: {
    width: 21,
    height: 55,
  },
  priceWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
