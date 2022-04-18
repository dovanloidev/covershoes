import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {FONTS, ICONS, SPACINGS} from '../../constants';

const Header = ({children, hasIconRight = true}) => {
  const insets = useSafeAreaInsets();

  return (
    <View style={{...styles.headerWrap, paddingTop: insets.top + SPACINGS.md}}>
      <TouchableOpacity>
        <Image style={styles.headerIcon} source={ICONS.back} />
      </TouchableOpacity>
      {children && <Text style={styles.title}>{children}</Text>}
      {hasIconRight && (
        <TouchableOpacity>
          <Image style={styles.headerIcon} source={ICONS.options} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: SPACINGS.xxxl,
  },
  headerIcon: {
    width: 24,
    height: 24,
  },
  title: {
    flex: 1,
    textAlign: 'center',
    marginHorizontal: SPACINGS.md,
    fontSize: FONTS.sizes.md,
    fontWeight: FONTS.weights.semiBold,
  },
});
