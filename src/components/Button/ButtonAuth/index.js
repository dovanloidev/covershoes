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

  const buttonStyles = [styles.container, getStyleByVariant().container, style];

  const txtStyles = [
    styles.txt,
    getStyleByVariant().txt,
    titleProps?.style !== undefined && titleProps?.style,
  ];

  return (
    <TouchableOpacity
      style={StyleSheet.flatten([buttonStyles])}
      onPress={onPress}>
      <Text style={StyleSheet.flatten([txtStyles])}>{children}</Text>
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
