import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {COLORS, SPACINGS} from '../../../constants';
import {Text} from '../../Text';

const CategoryItem = ({category}) => {
  const {title, id} = category || {};

  const backgroundColor = id === '1' ? COLORS.primary : COLORS.smoke;
  const color = id === '1' ? COLORS.white : COLORS.textGray;

  return (
    <TouchableOpacity style={{...styles.container, backgroundColor}}>
      <Text style={styles.title} color={color}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
  container: {
    height: 50,
    paddingHorizontal: SPACINGS.lg,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: SPACINGS.lg,
    borderRadius: SPACINGS.md,
  },
});
