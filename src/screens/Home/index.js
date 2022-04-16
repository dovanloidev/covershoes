import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {CategoryItem, ShoesItem, Text, TypeItem} from '../../components';
import {
  CATEGORIES_DATA,
  COLORS,
  FONTS,
  ICONS,
  SHOES_DATA,
  SPACINGS,
  TYPES_DATA,
} from '../../constants';

const Home = () => {
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.container}>
      {/* background */}
      <View style={styles.background} />
      {/* header */}
      <View
        style={{...styles.headerWrap, paddingTop: insets.top + SPACINGS.md}}>
        <TouchableOpacity>
          <Image style={styles.headerIcon} source={ICONS.nav_bar} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image style={styles.headerIcon} source={ICONS.nav_bar_search} />
        </TouchableOpacity>
      </View>
      {/* title */}
      <Text
        h4
        color={COLORS.blackLight}
        marginHorizontal={SPACINGS.xxxl}
        marginTop={50}>
        find your{'\n'}
        <Text weight={FONTS.weights.bold}>favorite shoes</Text>
      </Text>
      {/* list shoes */}
      <View style={styles.listWrap}>
        <View style={styles.typeWrap}>
          {TYPES_DATA.map(el => {
            return <TypeItem type={el} />;
          })}
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.shoesWrap}
          contentContainerStyle={styles.shoesContent}>
          {SHOES_DATA.map(el => {
            return <ShoesItem shoes={el} />;
          })}
        </ScrollView>
      </View>
      {/* category */}
      <View style={styles.categoryWrap}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          // bounces={false}
          contentContainerStyle={styles.categoryContent}>
          <Image style={styles.filterIcon} source={ICONS.filter} />
          {CATEGORIES_DATA.map(el => {
            return <CategoryItem key={el.id} category={el} />;
          })}
        </ScrollView>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 100,
  },
  background: {
    position: 'absolute',
    right: 0,
    width: 170,
    height: 379,
    backgroundColor: COLORS.primaryLight,
  },
  headerWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: SPACINGS.xxxl,
  },
  headerIcon: {
    width: 24,
    height: 24,
  },
  listWrap: {
    flex: 1,
    marginTop: SPACINGS.xxxl,
  },
  categoryWrap: {
    marginVertical: SPACINGS.xxxl,
  },
  filterIcon: {
    width: 24,
    height: 24,
  },
  categoryContent: {
    paddingHorizontal: SPACINGS.xxxl,
    alignItems: 'center',
  },
  typeWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 300,
    height: 50,
    position: 'absolute',
    transform: [{rotate: '-90deg'}, {translateY: -150}, {translateX: 25}],
    top: '50%',
    left: 25,
  },
  shoesWrap: {
    marginLeft: 50,
  },
  shoesContent: {
    paddingLeft: 30,
    alignItems: 'center',
  },
});
