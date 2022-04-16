import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import React from 'react';
import {COLORS, FONTS, SPACINGS} from '../../../constants';

const ButtonAuth = ({
  children,
  variant = 'filled',
  style,
  titleProps,
  onPress,
}) => {
  const getStyleByVariant = () => {
    if (variant === 'outline') {
      return {
        container: {backgroundColor: COLORS.white},
        txt: {color: COLORS.primary},
      };
    } else {
      return {
        container: {backgroundColor: COLORS.primary},
        txt: {color: COLORS.white},
      };
    }
  };

  return (
    <TouchableOpacity
      style={StyleSheet.flatten([
        styles.container,
        getStyleByVariant().container,
        style,
      ])}
      onPress={onPress}>
      <Text
        style={StyleSheet.flatten([
          styles.txt,
          getStyleByVariant().txt,
          titleProps?.style,
        ])}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

export default ButtonAuth;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: SPACINGS.full,
  },
  txt: {
    fontWeight: FONTS.weights.semiBold,
    fontSize: FONTS.sizes.lg,
  },
});
