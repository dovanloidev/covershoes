import React from 'react';
import {StyleSheet, Text as RNText} from 'react-native';

const Text = ({
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  style,
  size,
  weight,
  color,
  children,
}) => {
  const textStyle = [
    h1 !== undefined && styles.h1,
    h2 !== undefined && styles.h2,
    h3 !== undefined && styles.h3,
    h4 !== undefined && styles.h4,
    h5 !== undefined && styles.h5,
    h6 !== undefined && styles.h6,
    size !== undefined && {fontSize: size},
    weight !== undefined && {fontWeight: weight},
    color !== undefined && {color},
    style,
  ];

  return <RNText style={StyleSheet.flatten(textStyle)}>{children}</RNText>;
};

export default Text;

const styles = StyleSheet.create({
  h1: {
    fontWeight: 'bold',
    fontSize: 40,
  },
  h2: {
    fontWeight: 'bold',
    fontSize: 35,
  },
  h3: {
    fontWeight: 'bold',
    fontSize: 30,
  },
  h4: {
    fontWeight: '600',
    fontSize: 27,
  },
  h5: {
    fontWeight: '500',
    fontSize: 14,
  },
  h6: {
    fontWeight: '600',
    fontSize: 12,
  },
});
