import {StyleSheet, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {Text} from '../../Text';
import {COLORS, FONTS, SPACINGS} from '../../../constants';

const TypeItem = ({type}) => {
  const {id, title} = type || {};

  const isActive = id === '1';
  const color = isActive ? COLORS.primary : COLORS.textGray;

  return (
    <TouchableOpacity style={styles.container}>
      <Text color={color} weight={FONTS.weights.mixed}>
        {title}
      </Text>
      {isActive && <View style={styles.line} />}
    </TouchableOpacity>
  );
};

export default TypeItem;

const styles = StyleSheet.create({
  container: {},
  line: {
    width: 20,
    height: 2,
    backgroundColor: COLORS.primary,
    marginTop: SPACINGS.xs,
    alignSelf: 'center',
  },
});
