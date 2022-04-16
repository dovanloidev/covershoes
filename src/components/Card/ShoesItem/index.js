import {StyleSheet, View, Image} from 'react-native';
import React from 'react';
import {SPACINGS, FONTS, COLORS} from '../../../constants';
import {Text} from '../../Text';

const ShoesItem = ({shoes}) => {
  const {title, picture, price, author, colors, bgColor} = shoes || {};

  return (
    <View style={{...styles.container, backgroundColor: bgColor}}>
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
        <Text
          size={FONTS.sizes.md}
          weight={FONTS.weights.bold}
          marginTop={SPACINGS.lg}>
          {price}
        </Text>
      </View>
    </View>
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
});
